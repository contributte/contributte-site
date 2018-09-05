const {buildSidebar} = require('./utils/buildSidebar');

module.exports = {
  title: 'Contributte - First class extensions for Nette Framework',
  description: 'Contributte packages are first class extensions for Nette Framework.',
  keywords: 'contributte, nette, symfony, extensions, mvc, application, http, security, utils, database',
  ga: 'UA-28123999-19',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'All packages', link: '/packages/'},
      {text: 'Latest releases', link: '/releases/'},
      {text: 'Chat', link: 'https://gitter.im/contributte/contributte?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge'},
      {text: 'About', link: '/team'},
    ],
    lastUpdated: 'Last Updated',
    sidebar: buildSidebar()
  },
  evergreen: true,
  markdown: {
    lineNumbers: true
  }
};
