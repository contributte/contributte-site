const _ = require("lodash");

// Config
const CONFIG = require('./../../contributte');

const TMP_ORGS = {};
const TMP_REPOS = {};

function diff() {
  outdated();
  missing();
}

function outdated() {
  _.forEach(CONFIG.resources.repositories.read(), (repo, repoName) => {
    let found = false;
    _.forEach(Object.keys(CONFIG.data.organizations), (org) => {
      const res = _.find(getOrganization(org), { full_name: repoName });
      if (res) found = true;
    });

    if (!found) {
      console.log(`Repo ${repoName} is maybe outdated`);
    }
  });
}

function missing() {
  _.forEach(Object.keys(CONFIG.data.organizations), (org) => {
    _.forEach(getOrganization(org), repo => {
      const res = _.find(getRepositories(), { org, name: repo.name });
      if (!res) {
        console.log(`Repo ${repo.full_name} is maybe missing`);
      }
    });
  });
}

function getOrganization(org) {
  if (!TMP_ORGS[org]) {
    TMP_ORGS[org] = CONFIG.data.organizations[org].read();
  }

  return TMP_ORGS[org];
}

function getRepositories() {
  if (Object.keys(TMP_REPOS).length <= 0) {
    Object.assign(TMP_REPOS, CONFIG.resources.repositories.read());
  }

  return TMP_REPOS;
}

// @fire
(async () => {
  diff();
})();
