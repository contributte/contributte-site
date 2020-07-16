const _ = require('lodash');
const path = require("path");
const fs = require("fs");

// Config
const CONFIG = require('./../../contributte');

function generateTemplate(srcPath, destPath) {
  const template = fs.readFileSync(path.resolve(__dirname, '../../resources/templates/examples.tpl'));

  const compiler = _.template(template);
  const compiled = compiler({
    $readme: fs.readFileSync(srcPath),
  });

  if (!fs.existsSync(path.dirname(destPath))) {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
  }
  fs.writeFileSync(destPath, compiled);
}

// @fire
(async () => {
  const file = path.resolve(__dirname, '../../data/vcs/planette/playground/README.md');
  generateTemplate(file, path.resolve(__dirname, '../../sites/www/examples.md'));
})();
