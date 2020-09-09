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
  repo.pm = 'composer';
}

// @fire
(async () => {
  sync();
})();
