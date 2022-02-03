import path from "path";
import _ from "lodash";
import * as sidebar from "./utils/data/sidebar";
import * as releases from "./utils/data/releases";
import * as repositories from "./utils/data/repositories";
import * as patrons from "./utils/data/patrons";
import * as trusters from "./utils/data/trusters";
import * as heroes from "./utils/data/heroes";
import * as team from "./utils/data/team";

module.exports = {
  title: "Contributte",
  description: "First class extensions, addons and plugins for Nette Framework. Plenty of examples and tricks for Nette.",
  dest: path.resolve(__dirname, './../public'),
  themeConfig: {
    prevLinks: false,
    nextLinks: false,
    docsRepo: "contributte/website",
    docsDir: "sites/www",
    docsBranch: "master",
    editLinks: false,
    editLinkText: "Edit this page on Github!",
    algolia: {
      apiKey: "e2015bc524d8c80d122709059789e90f",
      indexName: "contributte"
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Blabs", link: "/blabs/" },
      { text: "Packages", link: "/packages/" },
      {
        text: 'Development',
        ariaLabel: 'Development',
        items: [
          {
            text: "Packages", items: [
              { text: "Releases", link: "/releases" },
              { text: "Examples", link: "/examples" },
            ]
          },
          {
            text: "Beginners", items: [
              { text: "Contributing", link: "/contributing" },
            ]
          },
        ]
      },
      { text: "Roadmap", link: "/roadmap/" },
      { text: "Partners", link: "/partners" },
      { text: "About", link: "/about" }
    ],
    lastUpdated: false,
    sidebar: sidebar.buildSidebar(),
    contributte: {
      packages: repositories.getRepositories().length,
      team: team.getTeam().length,
    }
  },
  evergreen: true,
  markdown: {
    lineNumbers: true,
    linkify: true,
  },
  postcss: {
    plugins: [
      require("tailwindcss")(path.resolve(__dirname, './../../../tailwind.config.js'))
    ]
  },
  extendPageData($page) {
    if ($page.regularPath === '/') {
      $page.contributte = {
        randomRepositories: _.sampleSize(repositories.getRepositories(), 6),
        patrons: patrons.getPatrons(),
      }
    }

    if ($page.regularPath === '/packages/') {
      $page.contributte = {
        repositories: repositories.getRepositories(),
      }
    }

    if ($page.regularPath === '/releases.html') {
      $page.contributte = {
        releases: releases.getFewReleases(30),
      }
    }

    if ($page.regularPath === '/partners.html') {
      $page.contributte = {
        patrons: patrons.getPatrons(),
        trusters: trusters.getTrusters(),
        heroes: heroes.getHeroes(),
      }
    }

    if ($page.regularPath === '/about.html') {
      $page.contributte = {
        team: team.getTeam(),
      }
    }
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
      "vuepress-plugin-smartlook",
      {
        id: "2144b6185ae4ade89a78aa0cae228b83fb9735a5"
      }
    ]
  ]
};
