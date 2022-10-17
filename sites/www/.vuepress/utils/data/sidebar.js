import _ from "lodash";
import {getRepositories} from './repositories';

const FIXED = [
	{
		title: 'Get Started',
		collapsable: false,
		children: [
			'/examples',
		]
	},
	{
		title: 'Get Involved',
		collapsable: false,
		children: [
			'/partners',
			'/contributing',
		]
	},
	{
		title: 'Development',
		collapsable: false,
		children: [
			'/releases',
			'/roadmap/challenges',
			'/roadmap/vision',
		]
	}
];

export function buildSidebar() {
	const sidebar = {};

	getRepositories()
		.forEach(r => {
			const title = r.title ? r.title : _.capitalize(_.replace(r.name, /-/g, ' '));

			if (r.docs.v === 'v2') {
				sidebar[`/packages/${r.org}/${r.name}/`] = [
					{
						title,
						collapsable: false,
						path: `/packages/${r.org}/${r.name}/`,
						children: _(r.docs.pages).map((title, path) => {
							return [`/packages/${r.org}/${r.name}/${path}`, title];
						}).value(),
					},
					...FIXED
				];
			} else {
				sidebar[`/packages/${r.org}/${r.name}.html`] = [
					[`/packages/${r.org}/${r.name}.html`, title],
					...FIXED
				];
			}
		});

	return sidebar;
}
