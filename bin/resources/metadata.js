const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const semver = require("semver");
const emoji = require('node-emoji');
const LOGGER = require('debug')('github');

// Config
const CONFIG = require('./../../contributte');

function merge() {
  const data = {};

  _.forEach(CONFIG.resources.repositories.read(), (repo, name) => {
    data[name] = repo;

    mergeGithub(data[name]);
    mergeComposer(data[name]);
  });

  fs.writeFileSync(
    CONFIG.resources.repositories.filepath,
    JSON.stringify(data, null, 2)
  );
}

function mergeGithub(repo) {
  const repos = CONFIG.data.organizations[repo.org].read();
  const matchedRepo = repos.find(r => r.full_name === `${repo.org}/${repo.name}`);

  if (!matchedRepo) {
    console.log(`Repository ${repo.org}/${repo.name} not found`);
    return;
  }

  repo.stars = matchedRepo.stargazers_count;
  repo.watchers = matchedRepo.watchers_count;
  repo.forks = matchedRepo.forks_count;
  repo.issues = matchedRepo.open_issues;
  repo.description = emoji.emojify(matchedRepo.description);
  repo.updated = matchedRepo.updated_at;
}

function mergeComposer(repo) {
  const repoPath = path.resolve(__dirname, '../data/vcs', repo.org, repo.name);

  // Parse composer.json
  const composer = _parseComposer(repoPath);
  if (!composer) return;

  const analyseDep = (version, name) => {
    // Which Nette version is supported
    if (_.startsWith(name, 'nette/')
      || _.startsWith(name, 'tracy/')
      || _.startsWith(name, 'latte/')
    ) {
      const netteVersions = [];
      if (semver.satisfies('2.4.999', version)
        || semver.satisfies('2.5.999', version)
        || semver.satisfies('2.6.999', version)
      ) {
        netteVersions.push('2.4');
      }
      if (semver.satisfies('3.0.0', version)) {
        netteVersions.push('3.0');
      }
      if (semver.satisfies('4.0.0', version)) {
        netteVersions.push('4.0');
      }

      _.set(repo, 'composer.nette', netteVersions);
    }

    // Which PHP version is supported
    if (name === 'php') {
      const phpVersions = [];
      const sanitizedVersion = version.replace(/\|{1}/, '||');
      const VERSIONS = ['5.6.999', '7.0.999', '7.1.999', '7.2.999', '7.3.999', '7.4.999', '8.0.999'];

      const minver = semver.minSatisfying(VERSIONS, sanitizedVersion);
      const maxver = semver.maxSatisfying(VERSIONS, sanitizedVersion);

      // if (semver.satisfies('5.6.0', version)) phpVersions.push('5.6');
      // if (semver.satisfies('7.0.0', version)) phpVersions.push('7.0');
      // if (semver.satisfies('7.1.0', version)) phpVersions.push('7.1');
      // if (semver.satisfies('7.2.0', version)) phpVersions.push('7.2');
      // if (semver.satisfies('7.3.0', version)) phpVersions.push('7.3');
      // if (semver.satisfies('7.4.0', version)) phpVersions.push('7.4');
      // if (semver.satisfies('8.0.0', version)) phpVersions.push('8.0');
      // if (semver.satisfies('9.0.0', version)) phpVersions.push('9.0');

      _.set(repo, 'composer.php', [
        minver.replace(/\.999$/, ''),
        maxver.replace(/\.999$/, ''),
      ]);
    }
  }

  // Deps + Devdeps
  _.forEach(composer['require'] || [], analyseDep);
  _.forEach(composer['require-dev'] || [], analyseDep);
}

function _parseComposer(path) {
  if (!fs.existsSync(`${path}/composer.json`)) {
    LOGGER(`File ${path}/composer.json not found`);
    return null;
  }

  return JSON.parse(fs.readFileSync(`${path}/composer.json`));
}

// @fire
(async () => {
  merge();
})();
