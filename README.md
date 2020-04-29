<h1 align=center>Contributte</h1>

<p align=center>
Official website of the Contributte, Nettrine, Apitte & Ninjify.
</p>

<p align=center>
🕹 <a href="https://f3l1x.io">f3l1x.io</a> | 💻 <a href="https://github.com/f3l1x">f3l1x</a> | 🐦 <a href="https://twitter.com/xf3l1x">@xf3l1x</a>
</p>

<p align=center>
  <a href="https://contributte.org"><img src="https://raw.githubusercontent.com/contributte/website/master/.assets/contributte.png"></a>
</p>  

## Info

This repository contains more websites at once.

The main **contributte** is based on [VuePress 1.x](https://v1.vuepress.vuejs.org/). VuePress is static site (documentation) generator.
Because we're lazy programmers, we reuse existing docs pages from the single repositories in [Contributte](https://github.com/contributte), 
[Apitte](https://github.com/apitte), [Nettrine](https://github.com/nettrine) and [Ninjify](https://github.com/ninjify) organization.

There is a template file for the README files which is used in generation phase. The resulting website contains about 150 pages (readmes) melted together.

## Data

For the first time, you will have empty `data/vcs` folder. You gonna needed
to download the repositories. And then generate markdown pages from the readmes.

```
make load
```

Everytime you would like to redownload a regenerate all data, just call `make load`.

If you need to just regenerate static packages, you can use this `make refresh`.

## Development

```
# Install dependencies
make install
```

```
# Start dev server 
make contributte-dev
```


## Deployment

```
# Compile sources
make contributte-build
```

```
# Deploy to Vercel
make contributte-deploy
make contributte-publish
```
