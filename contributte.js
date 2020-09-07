const path = require('path');

// Data

const organizations = {
  contributte: {
    filepath: path.resolve(__dirname, 'data/contributte.json'),
    read: () => require(organizations.contributte.filepath)
  },
  apitte: {
    filepath: path.resolve(__dirname, 'data/apitte.json'),
    read: () => require(organizations.apitte.filepath)
  },
  nettrine: {
    filepath: path.resolve(__dirname, 'data/nettrine.json'),
    read: () => require(organizations.nettrine.filepath)
  },
  ninjify: {
    filepath: path.resolve(__dirname, 'data/ninjify.json'),
    read: () => require(organizations.ninjify.filepath)
  }
};

const vcsRoot = path.resolve(__dirname, 'data/vcs');

const dataReleases = {
  filepath: path.resolve(__dirname, 'data/releases.json'),
  read: () => require(dataReleases.filepath),
};

// Resources

const repositories = {
  filepath: path.resolve(__dirname, 'resources/repositories.json'),
  read: () => require(repositories.filepath),
};

const releases = {
  filepath: path.resolve(__dirname, 'resources/releases.json'),
  read: () => require(releases.filepath),
};

const team = {
  filepath: path.resolve(__dirname, 'resources/team.json'),
  read: () => require(team.filepath),
};

module.exports = {
  data: {
    organizations,
    vcsRoot,
    releases: dataReleases
  },
  resources: {
    repositories,
    releases,
    team,
  },
};
