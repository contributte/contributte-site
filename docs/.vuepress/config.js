const {repositories} = require('../../data/repositories');
const _ = require('lodash');

function buildSidebarChildren(category) {
  return _(repositories)
    .filter(r => r.enabled)
    .filter(r => {
      if (category === null) return r['category'] === undefined;
      return r.category === category;
    })
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
    children: buildSidebarChildren('nette-contrib'),
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
    title: 'Other',
    collapsable: false,
    children: buildSidebarChildren(null),
  }
];

module.exports = {
  title: 'Contributte - First class extensions for Nette Framework',
  description: 'Contributte packages are first class extensions for Nette Framework.',
  keywords: 'contributte, nette, symfony, extensions, mvc, application, http, security, utils, database',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'All packages', link: '/packages/'},
      {text: 'About', link: '/team'},
    ],
    sidebar
  }
};
