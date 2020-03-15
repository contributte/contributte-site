const { buildSidebar } = require("./utils/buildSidebar");
const path = require('path');

module.exports = {
  title: "Contributte",
  description: "First class extensions, addons and plugins for Nette Framework. Plenty of examples and tricks for Nette.",
  dest: path.resolve(__dirname, './public'),
  themeConfig: {
    docsDir: "docs",
    docsBranch: "master",
    editLinks: false,
    editLinkText: "Help us improve this page!",
    algolia: {
      apiKey: "e2015bc524d8c80d122709059789e90f",
      indexName: "contributte"
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Blabs", link: "/blabs/" },
      { text: "Packages", link: "/packages/" },
      { text: "Releases", link: "/releases" },
      { text: "Examples", link: "/examples" },
      { text: "Contributing", link: "/contributing" },
      { text: "Partners", link: "/partners" },
      { text: "About", link: "/about" }
    ],
    lastUpdated: false,
    sidebar: buildSidebar()
  },
  evergreen: true,
  markdown: {
    lineNumbers: true
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")(path.resolve(__dirname, './../../../tailwind.config.js'))
    ]
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
        hostname: "https://contributte.org"
      }
    ],
    [
      require("./plugins/smartlook"),
      {
        id: "2144b6185ae4ade89a78aa0cae228b83fb9735a5"
      }
    ]
  ]
};