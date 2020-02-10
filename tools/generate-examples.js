const _ = require('lodash');
const path = require("path");
const fs = require("fs");

const CONFIG = require('./config');

function generateTemplate(repo, srcPath, destPath) {
  const template = fs.readFileSync(__dirname + '/../data/templates/examples.tpl');

  const compiler = _.template(template);
  const compiled = compiler({
    $readme: fs.readFileSync(srcPath),
    $repository: repo,
  });

  if (!fs.existsSync(path.dirname(destPath))) {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
  }
  fs.writeFileSync(destPath, compiled);
}

(async () => {
  const repo = _(CONFIG.repositories)
    .filter(r => r.org === 'planette' && r.name === 'playground')
    .head();

  const file = path.resolve(__dirname + `/../data/vcs/planette/playground/README.md`);

  generateTemplate(repo, file, __dirname + `/../docs/examples.md`);
})();
