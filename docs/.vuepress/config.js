const { buildSidebar } = require("./utils/buildSidebar");

module.exports = {
  title: "Contributte",
  description: "First class extensions, addons and plugins for Nette Framework. Planty of examples and tricks for Nette.",
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
      { text: "Packages", link: "/packages/" }, 
      { text: "Releases", link: "/releases/" }, 
      { text: "Examples", link: "/packages/planette/playground/" }, 
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
    ],
    [
      "vuepress-plugin-sitemap",
      {
        hostname: 'https://contributte.org'
      }
    ],
  ]
};
