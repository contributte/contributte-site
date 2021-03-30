install:
	npm ci

refresh: bin-github bin-releases bin-metadata bin-team

##################################################
# CONTRIBUTTE ####################################
##################################################

www-dev:
	npx vuepress dev sites/www

www-build:
	npx vuepress build sites/www

www-deploy:
	cd sites/www && vercel -c

www-public:
	cd sites/www && vercel -c --prod

##################################################
# DEV ############################################
##################################################

dev-dev:
	npx vuepress dev sites/dev

dev-build:
	npx vuepress build sites/dev

dev-deploy:
	cd sites/dev && vercel -c

dev-publish:
	cd sites/dev && vercel -c --prod

##################################################
# BIN ############################################
##################################################

bin-github:
	./butt bin/bump-github

bin-git:
	./butt bin/git-clone

bin-releases:
	./butt bin/bump-releases

bin-metadata:
	./butt bin/bump-metadata

bin-team:
	./butt bin/bump-team

bin-generate:
	./butt bin/generate
