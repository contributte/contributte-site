const repositories = require('./../../../../data/repositories.json');
const _ = require('lodash');

module.exports = {
  buildSidebar: () => {
    const sidebar = {};

    _(repositories)
      .filter(r => r.enabled)
      .forEach(r => {
        const title = r.title ? r.title : _.capitalize(_.replace(r.name, /-/g, ' '));

        if (r.docs.v === 'v2') {
          sidebar[`/packages/${r.org}/${r.name}/`] = [{
            title,
            collapsable: false,
            path: `/packages/${r.org}/${r.name}/`,
            children: _(r.docs.pages).map((title, path) => {
              return [`/packages/${r.org}/${r.name}/${path}`, title];
            }).value(),
          }];
        } else {
          sidebar[`/packages/${r.org}/${r.name}.html`] = [[`/packages/${r.org}/${r.name}.html`, title]];
        }
      });

    return sidebar;
  }
};
