const _ = require("lodash");
const fs = require("fs");
const httpclient = require("./utils/httpclient");

// Global
const organizations = require("./../data/organizations.json");
const { TOKEN } = require("./secret");

function sync() {
  _.forEach(organizations, async ({name}) => {
    const response = await httpclient.get(`/orgs/${name}/repos?per_page=200&access_token=${TOKEN}`);
    fs.writeFileSync(__dirname + `/../data/orgs/${name}.json`, JSON.stringify(response, null, 2));
  });
}

sync();
