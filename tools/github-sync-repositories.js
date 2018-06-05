const {repositories} = require('../data/repositories');
const _ = require('lodash');

// https://api.github.com/orgs/contributte/repos?per_page=100
const response = require('./response.json');

function syncAll() {
  _.forEach(response, r => syncRepo(r));
}

function syncRepo(repo) {
  if (repositories[repo.name] === undefined) {
    console.log(`Repository ${repo.name} not found`);
    return;
  }

  repositories[repo.name].description = repo.description;
}

syncAll();
console.log(JSON.stringify(repositories, null, 2));
