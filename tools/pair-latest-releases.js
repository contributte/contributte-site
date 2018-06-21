const repositories = require('../data/repositories.json');
const releases = require('../data/releases.json');
const _ = require('lodash');
const fs = require('fs');

function syncAll() {
  _.forEach(repositories, r => syncRepo(r));
  fs.writeFileSync(__dirname + '/../data/repositories.json', JSON.stringify(repositories, null, 2));
}

function syncRepo(repo) {
  const lastRelease = findLastRelease(repo);

  if (!lastRelease) {
    console.log("No release: " + repo.name);
    return;
  }

  repo.releases = repo.releases || {};
  repo.releases.last = lastRelease;
}

function findLastRelease(repo) {
  return _(releases)
    .filter(r => r.repo === repo.name)
    .orderBy(['created_at'], ['desc'])
    .head();
}

function dumpRelease(repo, release) {
  releases[release.id] = {
    repo: repo.name,
    tag: release.tag_name,
    name: release.name,
    created_at: release.created_at,
    published_at: release.published_at,
    html_url: release.html_url,
    body: release.body,
  };

}

syncAll();
