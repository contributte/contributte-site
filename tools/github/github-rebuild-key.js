const _ = require("lodash");
const fs = require("fs");

// Global
const CONFIG = require('./../config');

function rebuildKey() {
  const data = {};

  _.forEach(CONFIG.repositories, repo => {
    data[repo.org + '/' + repo.name] = repo;
  });

  fs.writeFileSync(
    __dirname + "/../../data/repositories.json",
    JSON.stringify(data, null, 2)
  );
}

rebuildKey();
