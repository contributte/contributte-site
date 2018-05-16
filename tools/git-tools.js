const path = require('path');
const {spawn} = require('child_process');
const _ = require('lodash');
const fs = require("fs");

const {repositories} = require(__dirname + '/../data/repositories');
const vcsRoot = path.resolve(__dirname + '/../data/vcs');
const processes = [];

function sync() {
  _.forEach(repositories, repo => {
    if (fs.existsSync(`${vcsRoot}/${repo.name}`)) {
      pullRepo(repo.name);
    } else {
      cloneRepo(repo.name);
    }
  })
}

function cloneRepo(repo) {
  const p = spawn('git', ['clone', `https://github.com/contributte/${repo}.git`], {cwd: vcsRoot});
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
  const p = spawn('git', ['pull'], {cwd: vcsRoot + "/" + repo});
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

// ===========================

sync();
