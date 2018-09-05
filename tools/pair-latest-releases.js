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

syncAll();
