const repositories = require('./../../../../data/repositories.json');
const _ = require('lodash');

function buildChildren(category) {
  return _(repositories)
    .filter(r => r.enabled)
    .filter(r => {
      if (category === null) return r['category'] === undefined;
      return r.category === category;
    })
    .orderBy(['priority', 'name'], ['desc', 'asc'])
    .map(r => {
      const title = r.title ? r.title : _.capitalize(_.replace(r.name, /-/g, ' '));

      if (r.docs.v === 'v2') {
        return {
          title,
          path: `/packages/${r.org}/${r.name}/`,
          children: _(r.docs.pages).map((title, path) => {
            return [`/packages/${r.org}/${r.name}/${path}`, title];
          }).value(),
        };
      } else {
        return {
          path: `/packages/${r.org}/${r.name}.html`,
          title
        };
      }
    })
    .value();
}

module.exports = {
  buildSidebar() {
    return {
      '/packages/': [
        {
          title: 'Nette',
          collapsable: true,
          children: buildChildren('nette-contrib'),
        },
        {
          title: 'Nette UI',
          collapsable: true,
          children: buildChildren('nette-ui'),
        },
        {
          title: 'Nette Forms',
          collapsable: true,
          children: buildChildren('nette-forms'),
        },
        {
          title: 'WebServices',
          collapsable: true,
          children: buildChildren('webservices'),
        },
        {
          title: 'Symfony',
          collapsable: true,
          children: buildChildren('symfony'),
        },
        {
          title: 'PHP party',
          collapsable: true,
          children: buildChildren('php-party'),
        },
        {
          title: 'Apitte',
          collapsable: true,
          children: buildChildren('apitte'),
        },
        {
          title: 'Nettrine',
          collapsable: true,
          children: buildChildren('nettrine'),
        },
        {
          title: 'Nextras',
          collapsable: true,
          children: buildChildren('nextras'),
        },
        {
          title: 'PSR',
          collapsable: true,
          children: buildChildren('psr'),
        },
        {
          title: 'Development',
          collapsable: true,
          children: buildChildren('development'),
        },
        {
          title: 'Ninjify',
          collapsable: true,
          children: buildChildren('ninjify'),
        },
        {
          title: 'Other',
          collapsable: true,
          children: buildChildren(null),
        },
      ]
    }
  }
};
