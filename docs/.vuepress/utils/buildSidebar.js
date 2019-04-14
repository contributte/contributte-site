const repositories = require('./../../../data/repositories.json');
const _ = require('lodash');

function buildChildren(category) {
  return _(repositories)
    .filter(r => r.enabled)
    .filter(r => {
      if (category === null) return r['category'] === undefined;
      return r.category === category;
    })
    .orderBy(['priority', 'name'], ['desc', 'asc'])
    .map((r) => {

      const title = r.title ? r.title : _.capitalize(_.replace(r.name, /-/g, ' '));
      const lastTag = r.releases ? r.releases.last : null;

      return [
        `/packages/${r.org}/${r.name}.html`,
        title
      ]
    })
    .value();
}

module.exports = {
  buildSidebar() {
    return {
      '/packages/': [
        {
          title: 'Get started',
          collapsable: false,
          children: [
            '/guide/',
            ['/packages/contributte/playground', 'Playground'],
          ]
        },
        {
          title: 'Nette',
          collapsable: false,
          children: buildChildren('nette-contrib'),
        },
        {
          title: 'Symfony',
          collapsable: false,
          children: buildChildren('symfony'),
        },
        {
          title: 'Apitte',
          collapsable: false,
          children: buildChildren('apitte'),
        },
        {
          title: 'Nettrine',
          collapsable: false,
          children: buildChildren('nettrine'),
        },
        {
          title: 'Nextras',
          collapsable: false,
          children: buildChildren('nextras'),
        },
        {
          title: 'PSR',
          collapsable: false,
          children: buildChildren('psr'),
        },
        {
          title: 'Development',
          collapsable: false,
          children: buildChildren('development'),
        },
        {
          title: 'Other',
          collapsable: false,
          children: buildChildren(null),
        },
      ]
    }
  }
};
