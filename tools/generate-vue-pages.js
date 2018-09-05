const _ = require('lodash');
const fs = require("fs");
const path = require("path");

// Global
const CONFIG = require('./config');

function getEnabledRepositories() {
  return _.filter(CONFIG.repositories, r => r.enabled);
}

function loadDoc(repo) {
  if (repo.docs === 'v0') {
    return path.resolve(__dirname + `/../data/vcs/${repo.org}/${repo.name}/README.md`);
  } else if (repo.docs === 'v1') {
    return path.resolve(__dirname + `/../data/vcs/${repo.org}/${repo.name}/.docs/README.md`);
  } else {
    throw Error('Invalid doc versions');
  }
}

getEnabledRepositories().forEach(repo => {
  const template = fs.readFileSync(__dirname + '/../data/templates/__package__.tpl');

  const compiler = _.template(template);
  const compiled = compiler({
    $readme: fs.readFileSync(loadDoc(repo)),
    $repository: repo,
  });

  if (!fs.existsSync(__dirname + `/../docs/packages/${repo.org}/`)) {
    fs.mkdirSync(__dirname + `/../docs/packages/${repo.org}/`);
  }
  fs.writeFileSync(__dirname + `/../docs/packages/${repo.org}/${repo.name}.md`, compiled);
});
