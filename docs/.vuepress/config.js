const { buildSidebar } = require("./utils/buildSidebar");

module.exports = {
  title: "Contributte",
  description: "Contributte packages are first class extensions for Nette Framework.",
  keywords: "contributte, nette, symfony, extensions, mvc, application, http, security, utils, database",
  themeConfig: {
    algolia: {
      apiKey: "e2015bc524d8c80d122709059789e90f",
      indexName: "contributte"
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "All packages", link: "/packages/" },
      { text: "Latest releases", link: "/releases/" },
      {
        text: "Chat",
        link: "https://gitter.im/contributte/contributte?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
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
