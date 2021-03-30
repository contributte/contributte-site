const _ = require('lodash');
const fs = require('fs');
const utils = require('./utils');

// Config
const CONFIG = require('./../contributte');
const REPOS = _.cloneDeep(CONFIG.repositories.read());
const releases = {};

// Config
async function sync() {
  for await (const [org, orgObj] of Object.entries(CONFIG.organizations)) {
    console.log(`Syncing ${org} releases`);
    const repos = orgObj.read();

    for await (const repo of repos) {
      await syncRepo(repo);
    }
  }
}

async function syncRepo(repo) {
  console.log(`Syncing ${repo.full_name} repo releases`);

  const data = await utils.githubGet(`/repos/${repo.full_name}/releases?per_page=100`, { headers: { Accept: 'application/vnd.github.VERSION.html+json' } });
  if (Array.isArray(data)) {
    data.forEach(release => dumpRelease(repo, release))
  } else {
    console.error(`${repo.full_name} has no releases`);
  }
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

  fs.writeFileSync(CONFIG.releases.filepath, JSON.stringify(releases, null, 2));
}

// @fire
(async () => {
  await sync();
})();
