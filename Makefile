install:
	npm ci

load: data-sync-git resources-generate-packages resources-generate-examples

refresh: resources-generate-packages resources-generate-examples

##################################################
# CONTRIBUTTE ####################################
##################################################

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

##################################################
# STATUS #########################################
##################################################

status-dev:
	npx vuepress dev sites/status

status-build:
	npx vuepress build sites/status

status-deploy:
	cd sites/status && now -c

status-publish:
	cd sites/status && now -c --prod

##################################################
# DATA ###########################################
##################################################

data-sync-git:
	./butt bin/data/git

data-sync-orgs:
	./butt bin/data/orgs

data-sync-releases:
	./butt bin/data/releases


##################################################
# RESOURCES ######################################
##################################################

resources-sync-metadata:
	./butt bin/resources/metadata

resources-sync-last-release:
	./butt bin/resources/last-release

resources-sync-team:
	./butt bin/resources/team

resources-generate-packages:
	./butt bin/generate/packages

resources-generate-examples:
	./butt bin/generate/examples
