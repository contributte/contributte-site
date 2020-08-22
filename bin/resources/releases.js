const fs = require('fs');

// Config
const CONFIG = require('./../../contributte');

function sync() {
  fs.writeFileSync(CONFIG.resources.releases.filepath, JSON.stringify(CONFIG.data.releases.read(), null, 2));
}

// @fire
(async () => {
  sync();
})();
