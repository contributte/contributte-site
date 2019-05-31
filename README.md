# Contributte

:squirrel: Contributte Website & Docs

## Prologue

This website is based on [VuePress 1.x](https://v1.vuepress.vuejs.org/). VuePress is static site (documentation) generator.
Because we're lazy programmers, we reuse existing docs pages from the single repositories in contributte, apitte, nettrine and ninjify organization.

There is a template file for the README files which is used in generation phase. The resulting website contains about 40 pages (readmes) melted together.

## Development

```
# Install dependencies
npm install
```

```
# Start dev server 
npm run docs:dev
```

**First time**

For the first time, you will have empty `data/vcs` folder. You gonna needed
to download the repositories. And then generate markdown pages from the readmes.

```
# Call many synchronizing scripts at once
make sync
```

## Deployment

```
# Compile sources
npm run docs:build
```
