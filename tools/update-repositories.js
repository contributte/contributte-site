const {repositories} = require('../data/repositories');
const _ = require('lodash');

function addRepositoryName() {
  const data = {};

  _.forEach(repositories, (value, key) => {
    data[key] = {name: key, ...value};
  });

  console.log(JSON.stringify(data, null, 2));
}

function sortByPriorityAndName() {
  let data = _(repositories)
    .orderBy(['priority', 'name'], ['desc', 'asc'])
    .keyBy('name')
    .value();

  console.log(JSON.stringify(data, null, 2));
}

sortByPriorityAndName();
