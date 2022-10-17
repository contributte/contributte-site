const _ = require("lodash");
const https = require("https");
const fs = require("fs");

export function mkdir(path) {
	try {
		fs.mkdirSync(path, {recursive: true});
	} catch (e) {
	}
}

export function githubGet(path, options) {
	return new Promise((resolve, reject) => {
		const defaults = _.merge(
			{
				hostname: `api.github.com`,
				path: path,
				headers: {"User-Agent": "Contributte", Authorization: `token ${process.env.GITHUB_TOKEN}`},
			},
			options
		);

		https
			.get(defaults, res => {
				let data = "";
				res.on("data", d => (data += d));
				res.on("end", () => {
					resolve(JSON.parse(data));
				});
			})
			.on("error", e => {
				console.error(e);
				reject(e);
			});
	});
}

export function capitalize(s) {
	if (typeof s !== 'string') return ''
	return s.charAt(0).toUpperCase() + s.slice(1)
}
