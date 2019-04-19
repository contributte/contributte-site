
const https = require("https");

function get(path, options) {
  return new Promise((resolve, reject) => {
    const defaults = {
      hostname: `api.github.com`,
      path: path,
      headers: { "User-Agent": "Contributte" },
      ...options
    };

    https
      .get(defaults, res => {
        let data = "";
        res.on("data", d => (data += d));
        res.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", e => {
        console.error(e);
        reject(e);
      });
  });
}

module.exports = {
  get
};
