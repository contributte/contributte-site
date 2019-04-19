const _ = require("lodash");

// Global
const CONFIG = require("./../config");

function diff() {
  outdated();
  missing();
}

function outdated() {
  _.forEach(CONFIG.repositories, (repo, repoName) => {
    let found = false;
    _.forEach(CONFIG.organizations, (org, orgName) => {
      const res = _.find(CONFIG.organizations[orgName], { full_name: repoName });
      if (res) found = true;
    });

    if (!found) {
      console.log(`Repo ${repoName} is maybe outdated`);
    }
  });
}

function missing() {
  _.forEach(CONFIG.organizations, (org, orgName) => {
    _.forEach(org, repo => {
      const res = _.find(CONFIG.repositories, { org: orgName, name: repo.name });
      if (!res) {
        console.log(`Repo ${repo.full_name} is maybe missing`);
      }
    });
  });
}

diff();
