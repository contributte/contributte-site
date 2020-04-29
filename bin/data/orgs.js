const _ = require("lodash");
const fs = require("fs");
const httpclient = require("./../../tools/utils/httpclient");

// Config
const CONFIG = require("./../../contributte");

function sync() {
  _.forEach(CONFIG.data.organizations, async (organization, name) => {
    console.log(`Syncing ${name} organization`);
    const response = await httpclient.get(`/orgs/${name}/repos?per_page=200&access_token=${process.env.GITHUB_TOKEN}`);
    fs.writeFileSync(organization.filepath, JSON.stringify(response, null, 2));
  });
}

// @fire
(async () => {
  sync();
})();
