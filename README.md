# Contributte

:squirrel: Contributte Website & Docs

## Dev

```
# Install dependencies
npm install
```

```
# Start dev server 
npm run docs:dev
```

### First time

For the first time, you will have empty `data/vcs` folder. You gonna needed
to download the repositories. And then generate markdown pages from the readmes.

```
# Clone wanted repositories
node tools/sync-git.js

# Generate pages from readme(s)
node tools/generate-vue-pages.js 
```


**Production**

```
# Compile sources
npm run docs:build
```
