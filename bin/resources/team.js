const _ = require('lodash');
const https = require('https');
const fs = require('fs');

// Config
const CONFIG = require('./../../contributte');

function sync() {
  const options = {
    hostname: `api.github.com`,
    path: `/orgs/contributte/members?per_page=200&access_token=${process.env.GITHUB_TOKEN}`,
    headers: {
      'User-Agent': 'Contributte',
      'Accept': 'application/vnd.github.VERSION.html+json',
    }
  };

  https.get(options, (res) => {
    let data = '';
    res.on('data', (d) => data += d);
    res.on('end', () => {
      const members = JSON.parse(data);
      const team = members.map(member => {
        return {
          username: member.login,
          avatar: member.avatar_url,
        }
      })
      fs.writeFileSync(CONFIG.resources.team.filepath, JSON.stringify(team, null, 2));
    });

  }).on('error', (e) => {
    console.error(`Syncing for ${repo.full_name} errored`, e);
  });
}

// @fire
(async () => {
  sync();
})();
