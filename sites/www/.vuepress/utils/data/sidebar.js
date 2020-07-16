import _ from "lodash";
import { getRepositories } from './repositories';

export function buildSidebar() {
  const sidebar = {};

  getRepositories()
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
