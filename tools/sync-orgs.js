const _ = require("lodash");
const fs = require("fs");
const httpclient = require("./utils/httpclient");

// Global
const CONFIG = require("./config");
const { TOKEN } = require("./secret");

function sync() {
  _.forEach(CONFIG.organizations, async (repos, org) => {
    const response = await httpclient.get(`/orgs/${org}/repos?per_page=200&access_token=${TOKEN}`);
    fs.writeFileSync(__dirname + `/../data/orgs/${org}.json`, JSON.stringify(response, null, 2));
  });
}

sync();
