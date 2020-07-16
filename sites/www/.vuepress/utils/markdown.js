const emoji = require("markdown-it-emoji");
const anchor = require("markdown-it-anchor");

export function createMarkdown() {
  const md = require("markdown-it")({
    html: true,
    linkify: false,
  })
    .use(emoji)
    .use(anchor.default, {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: "#"
    });

  return md;
}
