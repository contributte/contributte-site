const path = require('path');

// https://api.github.com/orgs/contributte/repos?per_page=100
const organizations = {
  contributte: require('./../data/orgs/contributte.json'),
  apitte: require('./../data/orgs/apitte.json'),
  nettrine: require('./../data/orgs/nettrine.json'),
};

const repositories = require('./../data/repositories.json');
const vcsRoot = path.resolve(__dirname + '/../data/vcs');

module.exports = {
  organizations,
  repositories,
  vcsRoot
};
