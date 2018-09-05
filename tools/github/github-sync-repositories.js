const _ = require('lodash');
const fs = require('fs');

// Global
const CONFIG = require('./../config');

function syncAll() {
  _.forEach(CONFIG.organizations, (repositories, org) => {
    _.forEach(repositories, r => syncRepo(org, r));
  });
}

function syncRepo(org, repo) {
  const key = org + '/' + repo.name;

  if (CONFIG.repositories[key] === undefined) {
    console.log(`Repository ${key} not found`);
    return;
  }

  CONFIG.repositories[key].description = repo.description;

  fs.writeFileSync(
    __dirname + "/../../data/repositories.json",
    JSON.stringify(CONFIG.repositories, null, 2)
  );
}

syncAll();
