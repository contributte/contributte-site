import _ from "lodash";
import { getEnabledRepositories } from './repositories';

export function buildSidebar() {
  const sidebar = {};

  getEnabledRepositories()
    .forEach(r => {
      console.log(r);
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

console.log(sidebar);

  return sidebar;
}
