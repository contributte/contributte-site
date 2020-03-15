contributte-dev:
	npx vuepress dev sites/contributte

contributte-build:
	npx vuepress build sites/contributte

contributte-deploy:
	cd sites/contributte && now -c

contributte-public:
	cd sites/contributte && now -c --prod

data-sync:
	node tools/sync-git
	node tools/sync-releases
	node tools/sync-latest-release
	node tools/generate-packages
