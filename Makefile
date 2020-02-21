.PHONY: sync

dev:
	npm run docs:dev

build:
	npm run docs:build

deploy:
	now -c

sync:
	node tools/sync-git
	node tools/sync-releases
	node tools/sync-latest-release
	node tools/generate-packages
