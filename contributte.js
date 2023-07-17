const path = require('path');

// Data

const organizations = {
	contributte: {
		filepath: path.resolve(__dirname, 'data/contributte.json'),
		read: () => require(organizations.contributte.filepath)
	}
};

const tmpDir = path.resolve(__dirname, 'tmp');
const dataDir = path.resolve(__dirname, 'data');
const sitesDir = path.resolve(__dirname, 'sites');

const releases = {
	filepath: path.resolve(__dirname, 'data/releases.json'),
	read: () => require(releases.filepath),
};

const repositories = {
	filepath: path.resolve(__dirname, 'data/repositories.json'),
	read: () => require(repositories.filepath),
};

const team = {
	filepath: path.resolve(__dirname, 'data/team.json'),
	read: () => require(team.filepath),
};

module.exports = {
	organizations,
	releases,
	repositories,
	team,
	tmpDir,
	dataDir,
	sitesDir
};
