const { buildSidebar } = require("./utils/buildSidebar");

module.exports = {
  title: "Contributte",
  description: "Contributte packages are first class extensions for Nette Framework.",
  keywords: "contributte, nette, symfony, extensions, mvc, application, http, security, utils, database",
  themeConfig: {
    repo: 'contributte/website',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    algolia: {
      apiKey: "e2015bc524d8c80d122709059789e90f",
      indexName: "contributte"
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Releases", link: "/releases/" },
      {
        text: "Chat",
        link: "https://gitter.im/contributte/contributte"
      },
      { text: "About", link: "/about" }
    ],
    lastUpdated: "Last Updated",
    sidebar: buildSidebar()
  },
  evergreen: true,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-28123999-19"
      }
    ]
  ]
};
