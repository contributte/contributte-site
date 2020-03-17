install:
	npm ci

data-sync:
	node tools/sync-git
	node tools/sync-releases
	node tools/sync-latest-release
	node tools/generate-packages

contributte-dev:
	npx vuepress dev sites/contributte

contributte-build:
	npx vuepress build sites/contributte

contributte-deploy:
	cd sites/contributte && now -c

contributte-generate:
	node tools/generate-packages

contributte-public:
	cd sites/contributte && now -c --prod

status-dev:
	npx vuepress dev sites/status

status-build:
	npx vuepress build sites/status

status-deploy:
	cd sites/status && now -c
