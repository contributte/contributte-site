contributte-dev:
	npx vuepress dev sites/website

contributte-build:
	npx vuepress build sites/website

contributte-deploy:
	cd sites/website && now -c

contributte-public:
	cd sites/website && now -c --prod

data-sync:
	node tools/sync-git
	node tools/sync-releases
	node tools/sync-latest-release
	node tools/generate-packages
