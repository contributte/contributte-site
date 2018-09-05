const emoji = require("markdown-it-emoji");
const anchor = require("markdown-it-anchor");
const toc = require("markdown-it-table-of-contents");
const linkify = require("linkify-it");

export function createMarkdown() {
  const md = require("markdown-it")({
    html: true,
    linkify: false,
  })
    .use(emoji)
    .use(anchor, {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: "#"
    });

  return md;
}
