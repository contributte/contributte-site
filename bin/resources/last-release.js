const _ = require("lodash");
const fs = require("fs");

// Config
const CONFIG = require('./../../contributte');
const REPOS = _.cloneDeep(CONFIG.resources.repositories.read());

function sync() {
  _.forEach(REPOS, r => syncRepo(r));
  fs.writeFileSync(CONFIG.resources.repositories.filepath, JSON.stringify(REPOS, null, 2));
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
  return _(CONFIG.data.releases.read())
    .filter(r => r.repo + "/" + r.org === repo.name + "/" + repo.org)
    .orderBy(["created_at"], ["desc"])
    .head();
}

// @fire
(async () => {
  sync();
})();
