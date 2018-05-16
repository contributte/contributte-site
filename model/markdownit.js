import MarkdownIt from 'markdown-it';
import twemoji from 'twemoji';

const cache = [];
let md = null;

export function createMarkdownit() {
  if (!md) {
    md = new MarkdownIt({"preset": "default", "html": true, "linkify": true, "typographer": true, "breaks": false});

    md.use(require('markdown-it-emoji'));
    md.use(require('markdown-it-github-headings'), {"enableHeadingLinkIcons": false});

    md.renderer.rules.emoji = function (token, idx) {
      return twemoji.parse(token[idx].content);
    };
  }

  return md;
}

export function markdownCache(id, content) {
  if (!cache[id]) {
    cache[id] = createMarkdownit().render(content);
  }

  return cache[id];
}
