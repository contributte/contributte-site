const _ = require('lodash');
const fs = require('fs');

// Global
const CONFIG = require('./config');

function syncAll() {
  _.forEach(CONFIG.repositories, r => syncRepo(r));
  fs.writeFileSync(__dirname + '/../data/repositories.json', JSON.stringify(CONFIG.repositories, null, 2));
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
  return _(CONFIG.releases)
    .filter(r => r.repo + '/' + r.org === repo.name + '/' + repo.org)
    .orderBy(['created_at'], ['desc'])
    .head();
}

syncAll();
