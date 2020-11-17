const _ = require("lodash");
const fs = require("fs");

// Config
const CONFIG = require('./../../contributte');
const REPOS = _.cloneDeep(CONFIG.resources.repositories.read());

function sync() {
  _.forEach(REPOS, r => syncPackageManager(r));
  fs.writeFileSync(CONFIG.resources.repositories.filepath, JSON.stringify(REPOS, null, 2));
}

function syncPackageManager(repo) {
  repo.pm = {};

  const composer = tryComposer(repo);
  if (composer) {
    repo.pm.composer = composer;
  }

  const npm = tryNpm(repo);
  if (npm) {
    repo.pm.npm = npm;
  }
}

function tryComposer(repo) {
  try {
    const file = fs.readFileSync(`${CONFIG.data.vcsRoot}/${repo.org}/${repo.name}/composer.json`);
    const composer = JSON.parse(file);
    return composer.name;
  } catch (e) {
    return null;
  }
}

function tryNpm(repo) {
  try {
    const file = fs.readFileSync(`${CONFIG.data.vcsRoot}/${repo.org}/${repo.name}/package.json`);
    const npm = JSON.parse(file);
    return npm.name;
  } catch (e) {
    return null;
  }
}

// @fire
(async () => {
  sync();
})();
