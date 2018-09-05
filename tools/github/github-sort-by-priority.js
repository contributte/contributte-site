const _ = require('lodash');
const fs = require('fs');

// Global
const CONFIG = require('./../config');

function addRepositoryName() {
  const data = {};

  _.forEach(CONFIG.repositories, (value, key) => {
    data[key] = {name: key, ...value};
  });

  console.log(JSON.stringify(data, null, 2));
}

function sortByPriorityAndName() {
  let data = _(CONFIG.repositories)
    .orderBy(['priority', 'name'], ['desc', 'asc'])
    .keyBy('name')
    .value();

  fs.writeFileSync(
    __dirname + "/../../data/repositories.json",
    JSON.stringify(data, null, 2)
  );
}

sortByPriorityAndName();
