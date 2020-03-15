const { path } = require('@vuepress/shared-utils');

module.exports = (options = {}) => {
  return {
    define() {
      return {
        SMARTLOOK_ID: options.id
      }
    },

    enhanceAppFiles: [
      path.resolve(__dirname, 'smartlook.js')
    ]
  }
};
