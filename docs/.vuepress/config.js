const {repositories} = require('../../data/repositories');
const _ = require('lodash');

function buildSidebarChildren(category) {
  return _(repositories)
    .filter(r => r.enabled)
    .filter(r => {
      if (category === null) return r['category'] === undefined;
      return r.category === category;
    })
    .orderBy(['priority', 'name'], ['desc', 'asc'])
    .map((r) => [
      `/packages/${r.name}.html`,
      r.title ? r.title : _.capitalize(_.replace(r.name, /-/g, ' '))
    ])
    .value();
}

const sidebar = [
  {
    title: 'Get started',
    collapsable: false,
    children: [
      '/guide/',
      ['/packages/playground', 'Playground'],
    ]
  },
  {
    title: 'Nette',
    collapsable: false,
    children: buildSidebarChildren('nette-contrib'),
  },
  {
    title: 'Symfony',
    collapsable: false,
    children: buildSidebarChildren('symfony'),
  },
  {
    title: 'Nextras',
    collapsable: false,
    children: buildSidebarChildren('nextras'),
  },
  {
    title: 'PSR',
    collapsable: false,
    children: buildSidebarChildren('psr'),
  },
  {
    title: 'Development',
    collapsable: false,
    children: buildSidebarChildren('development'),
  },
  {
    title: 'Other',
    collapsable: false,
    children: buildSidebarChildren(null),
  },
];

module.exports = {
  title: 'Contributte - First class extensions for Nette Framework',
  description: 'Contributte packages are first class extensions for Nette Framework.',
  keywords: 'contributte, nette, symfony, extensions, mvc, application, http, security, utils, database',
  ga: 'UA-28123999-19',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'All packages', link: '/packages/'},
      {text: 'About', link: '/team'},
    ],
    lastUpdated: 'Last Updated',
    sidebar
  },
  evergreen: true,
  markdown: {
    lineNumbers: true
  }
};
