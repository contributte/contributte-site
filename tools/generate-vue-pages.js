const _ = require('lodash');
const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Global
const CONFIG = require('./config');

function getEnabledRepositories() {
  return _.filter(CONFIG.repositories, r => r.enabled);
}

function loadDoc(repo) {
  if (repo.docs.v === 'v0') {
    return path.resolve(__dirname + `/../data/vcs/${repo.org}/${repo.name}/README.md`);
  } else if (repo.docs.v === 'v1') {
    return path.resolve(__dirname + `/../data/vcs/${repo.org}/${repo.name}/.docs/README.md`);
  } else if (repo.docs.v === 'v2') {
    return glob.sync("*.md", {
      absolute: true,
      cwd: path.resolve(__dirname + `/../data/vcs/${repo.org}/${repo.name}/${repo.docs.folder || '.docs'}/`)
    });
  } else {
    throw Error('Invalid doc versions');
  }
}

function generateTemplate(repo, srcPath, destPath) {
  const template = fs.readFileSync(__dirname + '/../data/templates/__package__.tpl');

  const compiler = _.template(template);
  const compiled = compiler({
    $readme: fs.readFileSync(srcPath),
    $repository: repo,
  });

  if (!fs.existsSync(path.dirname(destPath))) {
    fs.mkdirSync(path.dirname(destPath));
  }
  fs.writeFileSync(destPath, compiled);
}

getEnabledRepositories().forEach(repo => {
  const file = loadDoc(repo);

  if (Array.isArray(file)) {
    file.forEach(f => {
      generateTemplate(repo, f, __dirname + `/../docs/packages/${repo.org}/${repo.name}/${path.basename(f)}`);
    });
  } else {
    generateTemplate(repo, file, __dirname + `/../docs/packages/${repo.org}/${repo.name}.md`);
  }
});
