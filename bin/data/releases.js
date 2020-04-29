const _ = require('lodash');
const https = require('https');
const fs = require('fs');

// Config
const CONFIG = require('./../../contributte');
const releases = {};

function sync() {
  _.forEach(CONFIG.data.organizations, (repositories, org) => {
    console.log(`Syncing ${org} releases`);
    _.forEach(repositories.read(), r => syncRepo(r));
  });
}

function syncRepo(repo) {
  const options = {
    hostname: `api.github.com`,
    path: `/repos/${repo.full_name}/releases?per_page=200&access_token=${process.env.GITHUB_TOKEN}`,
    headers: {
      'User-Agent': 'Contributte',
      'Accept': 'application/vnd.github.VERSION.html+json',
    }
  };

  https.get(options, (res) => {
    let data = '';
    res.on('data', (d) => data += d);
    res.on('end', () => {
      const releases = JSON.parse(data);
      if (Array.isArray(releases)) {
        releases.forEach(release => dumpRelease(repo, release))
      } else {
        console.error(`${repo.full_name} has no releases`);
      }
    });

  }).on('error', (e) => {
    console.error(`Syncing for ${repo.full_name} errored`, e);
  });
}

function dumpRelease(repo, release) {
  releases[release.id] = {
    org: repo.owner.login,
    repo: repo.name,
    tag: release.tag_name,
    name: release.name,
    created_at: release.created_at,
    published_at: release.published_at,
    html_url: release.html_url,
    body: release.body_html,
  };

  fs.writeFileSync(CONFIG.data.releases.filepath, JSON.stringify(releases, null, 2));
}

// @fire
(async () => {
  sync();
})();
