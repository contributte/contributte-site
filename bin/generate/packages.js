const _ = require('lodash');
const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Config
const CONFIG = require('./../../contributte');

function loadDoc(repo) {
  if (repo.docs.v === 'v0') {
    return path.resolve(path.resolve(__dirname, `../../data/vcs/${repo.org}/${repo.name}/README.md`));
  } else if (repo.docs.v === 'v1') {
    return path.resolve(path.resolve(__dirname, `../../data/vcs/${repo.org}/${repo.name}/.docs/README.md`));
  } else if (repo.docs.v === 'v2') {
    return glob.sync("*.md", {
      absolute: true,
      ignore: ["README.md"],
      cwd: path.resolve(__dirname, `../../data/vcs/${repo.org}/${repo.name}/${repo.docs.folder || '.docs'}/`)
    });
  } else {
    throw Error('Invalid doc versions');
  }
}

function generateTemplate(repo, srcPath, destPath) {
  const template = fs.readFileSync(path.resolve(__dirname, '../../resources/templates/package.tpl'));

  const compiler = _.template(template);
  const compiled = compiler({
    $readme: fs.readFileSync(srcPath),
    $repository: repo,
    $_packagist: resolvePackagist(repo)
  });

  if (!fs.existsSync(path.dirname(destPath))) {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
  }
  fs.writeFileSync(destPath, compiled);
}

function resolvePackagist(repo) {
  if (repo.releases && repo.releases.last) return repo.releases.last.tag;
  if ((repo.options && !repo.options.packagist) || true) return 'Packagist';
  return 'Undefined';
}

function filterEnabled() {
  return _.filter(CONFIG.resources.repositories.read(), r => r.enabled);
}

// @fire
(async () => {

  // Clean folders
  Object.keys(CONFIG.data.organizations).forEach(org => {
    const folder = path.resolve(__dirname, `../../sites/contributte/packages/${org}`);
    console.log(`Purging ${folder}`);

    fs.rmdirSync(folder, { recursive: true });
  })

  // Generate new pages
  filterEnabled().forEach(repo => {
    const file = loadDoc(repo);

    if (Array.isArray(file)) {
      file.forEach(f => {
        generateTemplate(repo, f, path.resolve(__dirname, `../../sites/contributte/packages/${repo.org}/${repo.name}/${path.basename(f)}`));
      });
    } else {
      generateTemplate(repo, file, path.resolve(__dirname, `../../sites/contributte/packages/${repo.org}/${repo.name}.md`));
    }
  });
})();
