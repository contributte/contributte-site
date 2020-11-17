const _ = require("lodash");

// Config
const CONFIG = require('./../../contributte');

const TMP_ORGS = {};
const TMP_REPOS = {};

const IGNORED = [
  'contributte/contributte',
  'contributte/website',
  'contributte/api',
  'contributte/advisories',
  'contributte/nextras-criteria',
  'contributte/datagrid-elasticsearch-data-source',
  'contributte/datagrid-dibi-data-source',
  'contributte/datagrid-doctrine-data-source',
  'contributte/datagrid-nextras-data-source',
  'contributte/datagrid-leanmapper-data-source',
  'contributte/cnb',
  'contributte/gopay-api',
  'apitte/events',
  'apitte/mapping',
  'apitte/apitte-org',
  'apitte/openapi-toolkit'
]

function outdated() {
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

function missing() {
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
  return Object.keys(CONFIG.data.organizations)
    .filter(org => org !== 'planette');
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
  outdated();
  missing();
})();
