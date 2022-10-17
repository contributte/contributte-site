const _ = require('lodash');
const {spawnSync} = require('child_process');
const fs = require("fs");
const utils = require("./utils");

// Config
const CONFIG = require('./../contributte');

function sync() {
	_.forEach(CONFIG.repositories.read(), repo => {

		if (!fs.existsSync(`${CONFIG.tmpDir}/${repo.org}`)) {
			utils.mkdir(`${CONFIG.tmpDir}/${repo.org}`);
		}

		if (fs.existsSync(`${CONFIG.tmpDir}/${repo.org}/${repo.name}`)) {
			pullRepo(repo);
		} else {
			cloneRepo(repo);
		}
	})
}

function cloneRepo(repo) {
	console.log(`Clonning [${repo.org}/${repo.name}]: START`);
	const output = spawnSync('git', ['clone', `https://github.com/${repo.org}/${repo.name}.git`], {cwd: `${CONFIG.tmpDir}/${repo.org}`});
	console.log(`[${repo.org}/${repo.name}]: ${output.status === 0 ? output.stdout : output.stderr}`);
	console.log(`Clonning [${repo.org}/${repo.name}]: DONE`);
}

function pullRepo(repo) {
	console.log(`Pulling [${repo.org}/${repo.name}]: START`);
	const output = spawnSync('git fetch origin master && git reset --hard origin/master', {
		shell: true,
		cwd: `${CONFIG.tmpDir}/${repo.org}/${repo.name}`
	});
	console.log(`[${repo.org}/${repo.name}]: ${output.status === 0 ? output.stdout : output.stderr}`);
	console.log(`Pulling [${repo.org}/${repo.name}]: DONE`);
}

// @fire
(async () => {
	sync();
})();
