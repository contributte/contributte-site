
const fs = require("fs");

function mkdir(path) {
  try {
    fs.mkdirSync(path);
  } catch (e) {
  }
}

module.exports = {
  mkdir
};
