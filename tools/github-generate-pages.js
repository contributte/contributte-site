const {repositories} = require('../data/repositories');
const _ = require('lodash');
const fs = require("fs");
const path = require("path");

function getEnabledRepositories() {
  return _.filter(repositories, r => r.enabled);
}

function loadDoc(repository) {
  if (repository.docs === 'v0') {
    return path.resolve(__dirname + `/../data/vcs/${repository.name}/README.md`);
  } else if (repository.docs === 'v1') {
    return path.resolve(__dirname + `/../data/vcs/${repository.name}/.docs/README.md`);
  } else {
    throw Error('Invalid doc versions');
  }
}

getEnabledRepositories().forEach(r => {
  const template = fs.readFileSync(__dirname + '/../data/templates/__package__.tpl');

  const compiler = _.template(template);
  const compiled = compiler({
    $readme: fs.readFileSync(loadDoc(r)),
    $repository: r,
  });

  fs.writeFileSync(__dirname + '/../docs/packages/' + r.name + '.md', compiled);
});
