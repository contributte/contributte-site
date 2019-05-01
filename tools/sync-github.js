const _ = require("lodash");
const fs = require("fs");

// Global
const CONFIG = require('./config');

(() => {
  const data = {};

  _.forEach(CONFIG.repositories, (value, key) => {
    data[key] = value;

    mergeStats(data[key]);
  });

  fs.writeFileSync(
    __dirname + "/../data/repositories.json",
    JSON.stringify(data, null, 2)
  );
})();

function mergeStats(repo) {
  const repos = CONFIG.organizations[repo.org];
  const matchedRepo = repos.find(r => r.full_name === `${repo.org}/${repo.name}`);

  if (!matchedRepo) {
    console.log(`Repository ${repo.org}/${repo.name} not found`);
    return;
  }

  repo.stars = matchedRepo.stargazers_count;
  repo.watchers = matchedRepo.watchers_count;
  repo.forks = matchedRepo.forks_count;
}
