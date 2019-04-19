.PHONY: sync

sync:
	node tools/sync-git
	node tools/sync-releases
	node tools/sync-latest-release
	node tools/generate-vue-pages

