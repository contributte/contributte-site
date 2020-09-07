install:
	npm ci

load: data-sync-git resources-generate-packages

refresh: resources-generate-packages

##################################################
# CONTRIBUTTE ####################################
##################################################

www-dev:
	npx vuepress dev sites/www

www-build:
	npx vuepress build sites/www

www-deploy:
	cd sites/www && now -c

www-public:
	cd sites/www && now -c --prod

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

resources-missing:
	./butt bin/misc/missing

resources-releases:
	./butt bin/resources/releases
