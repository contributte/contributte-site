const _ = require("lodash");
const fs = require("fs");

// Config
const CONFIG = require('./../contributte');
const REPOS = _.cloneDeep(CONFIG.repositories.read());

const BULK = []

function syncPackageManager() {
  _.forEach(REPOS, r => tryPackageManager(r));
  fs.writeFileSync(CONFIG.repositories.filepath, JSON.stringify(REPOS, null, 2));
}

function syncBulk() {
  BULK.forEach(repo => {
    const [org, name] = repo.split("/");
    REPOS[repo] = {
      "org": "contributte",
      "name": name,
      "category": "unkwnown",
      "enabled": false
    }
  });
  fs.writeFileSync(CONFIG.repositories.filepath, JSON.stringify(REPOS, null, 2));
}

function tryPackageManager(repo) {
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
    const file = fs.readFileSync(`${CONFIG.tmpDir}/${repo.org}/${repo.name}/composer.json`);
    const composer = JSON.parse(file);
    return composer.name;
  } catch (e) {
    return null;
  }
}

function tryNpm(repo) {
  try {
    const file = fs.readFileSync(`${CONFIG.tmpDir}/${repo.org}/${repo.name}/package.json`);
    const npm = JSON.parse(file);
    return npm.name;
  } catch (e) {
    return null;
  }
}

// @fire
(async () => {
  syncPackageManager();
  // syncBulk();
})();
