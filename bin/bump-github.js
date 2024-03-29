const _ = require("lodash");
const fs = require("fs");
const utils = require("./utils");

// Config
const CONFIG = require("./../contributte");

const LEVELS = {
	contributte: [1, 2, 3]
}

function sync() {
	_.forEach(CONFIG.organizations, async (organization, name) => {
		console.log(`Syncing ${name} organization`);

		const repos = [];
		for (const page in LEVELS[name]) {
			console.log(`Syncing ${name} organization page ${page}`);
			repos.push(...(await utils.githubGet(`/orgs/${name}/repos?per_page=100&page=${page}`)));
		}
		fs.writeFileSync(organization.filepath, JSON.stringify(repos, null, 2));
	});
}

// @fire
(async () => {
	sync();
})();
