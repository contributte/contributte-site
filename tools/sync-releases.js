const _ = require('lodash');
const https = require('https');
const fs = require('fs');

// Global
const CONFIG = require('./config');
const {TOKEN} = require('./secret');

// Vars
const releases = {};

function syncAll() {
  _.forEach(CONFIG.organizations, (repositories, org) => {
    _.forEach(repositories, r => syncRepo(org, r));
  });
}

function syncRepo(org, repo) {
  const options = {
    hostname: `api.github.com`,
    path: `/repos/${org}/${repo.name}/releases?per_page=200&access_token=${TOKEN}`,
    headers: {'User-Agent': 'Contributte'}
  };

  https.get(options, (res) => {
    let data = '';
    res.on('data', (d) => data += d);
    res.on('end', () => {
      const releases = JSON.parse(data);
      releases.forEach(release => dumpRelease(repo, release))
    });

  }).on('error', (e) => {
    console.error(e);
  });
}

function dumpRelease(repo, release) {
  releases[release.id] = {
    org: repo.org,
    repo: repo.name,
    tag: release.tag_name,
    name: release.name,
    created_at: release.created_at,
    published_at: release.published_at,
    html_url: release.html_url,
    body: release.body,
  };

  fs.writeFileSync(__dirname + '/../data/releases.json', JSON.stringify(releases, null, 2));
}

syncAll();
