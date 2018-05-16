const {repositories} = require('../data/repositories');
const _ = require('lodash');
const fs = require("fs");

function getEnabledRepositories() {
  return _.filter(repositories, r => r.enabled);
}

function loadDoc(repository) {
  if (repository.docs === 'v0') {
    return `@/data/vcs/${repository.name}/README.md`;
  } else if (repository.docs === 'v1') {
    return `@/data/vcs/${repository.name}/.docs/README.md`;
  } else {
    throw Error('Invalid doc versions');
  }
}

getEnabledRepositories().forEach(r => {
  const doc = loadDoc(r);
  const docTemplate = fs.readFileSync(__dirname + '/../dynamic/__package__.tpl');
  const compiler = _.template(docTemplate);
  const compiled = compiler({
    $readme: doc,
    $repository: r,
  });

  fs.writeFileSync(__dirname + '/../pages/packages/' + r.name + '.vue', compiled);
});
