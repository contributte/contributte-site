const _ = require('lodash');
const fs = require('fs');
const utils = require('./utils');

// Config
const CONFIG = require('./../contributte');

async function sync() {
	const data = await utils.githubGet('/orgs/contributte/members?per_page=100');
	const team = data.map(member => {
		return {
			username: member.login,
			avatar: member.avatar_url,
		}
	})
	fs.writeFileSync(CONFIG.team.filepath, JSON.stringify(team, null, 2));
}

// @fire
(async () => {
	await sync();
})();
