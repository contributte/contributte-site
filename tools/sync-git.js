const _ = require('lodash');
const {spawn} = require('child_process');
const fs = require("fs");

// Global
const CONFIG = require('./config');

// Vars
const processes = [];

function sync() {
  _.forEach(CONFIG.repositories, repo => {

    if (!fs.existsSync(`${CONFIG.vcsRoot}/${repo.org}`)) {
      fs.mkdirSync(`${CONFIG.vcsRoot}/${repo.org}`);
    }

    if (fs.existsSync(`${CONFIG.vcsRoot}/${repo.org}/${repo.name}`)) {
      pullRepo(repo);
    } else {
      cloneRepo(repo);
    }
  })
}

function cloneRepo(repo) {
  const p = spawn('git', ['clone', `https://github.com/${repo.org}/${repo.name}.git`], {cwd: `${CONFIG.vcsRoot}/${repo.org}`});
  processes.push(p);

  p.stdout.on('data', (data) => {
    console.log(`[${repo}]: ${data}`);
  });

  p.stderr.on('data', (data) => {
    console.log(`![${repo}]: ${data}`);
  });

  p.on('close', (code) => {
    if (code === 0) {
      console.log(`Clonning [${repo}]: DONE`);
    } else {
      console.log(`Clonning [${repo}]: FAILED`);
    }
  });
}

function pullRepo(repo) {
  const p = spawn('git fetch origin master && git reset --hard origin/master', {
    shell: true,
    cwd: `${CONFIG.vcsRoot}/${repo.org}/${repo.name}`
  });
  processes.push(p);

  p.stdout.on('data', (data) => {
    console.log(`[${repo}]: ${data}`);
  });

  p.stderr.on('data', (data) => {
    console.log(`![${repo}]: ${data}`);
  });

  p.on('close', (code) => {
    if (code === 0) {
      console.log(`Pulling [${repo}]: DONE`);
    } else {
      console.log(`Pulling [${repo}]: FAILED`);
    }
  });
}

sync();
