const _ = require("lodash");

// Config
const CONFIG = require('./../contributte');

const TMP_ORGS = {};
const TMP_REPOS = {};

const IGNORED = [];

async function outdated() {
  _.forEach(getRepositories(), (repo, repoName) => {
    let found = false;
    _.forEach(getOrganizations(), (org) => {
      const res = _.find(getOrganization(org), { full_name: repoName });
      if (res) found = true;
    });

    if (!found) {
      console.log(`Repo ${repoName} is maybe outdated`);
    }
  });
}

async function missing() {
  _.forEach(getOrganizations(), (org) => {
    _(getOrganization(org))
      .filter(repo => !IGNORED.includes(`${org}/${repo.name}`))
      .forEach(repo => {
        const res = _.find(getRepositories(), { org, name: repo.name });
        if (!res) {
          console.log(`Repo ${repo.full_name} is maybe missing`);
        }
      });
  });
}

function getOrganizations() {
  return Object.keys(CONFIG.organizations)
    .filter(org => org !== 'planette');
}

function getOrganization(org) {
  if (!TMP_ORGS[org]) {
    TMP_ORGS[org] = CONFIG.organizations[org].read();
  }

  return TMP_ORGS[org];
}

function getRepositories() {
  if (Object.keys(TMP_REPOS).length <= 0) {
    Object.assign(TMP_REPOS, CONFIG.repositories.read());
  }

  return TMP_REPOS;
}

// @fire
(async () => {
  console.log('OUTDATED:')
  await outdated();

  console.log("\n\n\n")

  console.log('MISSING:')
  await missing();
})();
