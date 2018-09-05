const _ = require("lodash");
const fs = require("fs");

// Global
const CONFIG = require('./../config');

function appendContributteOrg() {
  const data = {};

  _.forEach(CONFIG.repositories, (value, key) => {
    data[key] = {org: "contributte", ...value};
  });

  fs.writeFileSync(
    __dirname + "/../../data/repositories.json",
    JSON.stringify(data, null, 2)
  );
}

appendContributteOrg();
