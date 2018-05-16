const repositories = {
  "console": {
    "name": "console",
    "category": "symfony",
    "enabled": true,
    "priority": 100,
    "docs": "v1",
    "description": ":boom: Best minimal console (symfony/console) to Nette Framework (@nette)"
  },
  "event-dispatcher": {
    "name": "event-dispatcher",
    "category": "symfony",
    "enabled": true,
    "priority": 99,
    "docs": "v1",
    "description": ":boom: Best events support (symfony/event-dispatcher) to Nette Framework (@nette)"
  },
  "advisories": {
    "name": "advisories",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":punch: Collection of Contributte/Nette advisories"
  },
  "api": {
    "name": "api",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": "[Moved to @apitte] Powerful API to Nette Framework"
  },
  "application": {
    "name": "application",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/application (@nette)"
  },
  "blogette": {
    "name": "blogette",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":postbox: Blogging platform"
  },
  "bootstrap": {
    "name": "bootstrap",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/bootstrap (@nette)"
  },
  "cache": {
    "name": "cache",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/caching (@nette)"
  },
  "codeception": {
    "name": "codeception",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":arrow_forward: Integration of Nette Framework to Codeception."
  },
  "console-extra": {
    "name": "console-extra",
    "category": "symfony",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":recycle: Nette-based console commands for latte, DIC, security, utils and many others.  "
  },
  "contributte": {
    "name": "contributte",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":heart: Contributte organization structure / RFC / Team"
  },
  "database": {
    "name": "database",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/database (@nette)"
  },
  "deployer-extension": {
    "name": "deployer-extension",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":horse_racing: FTP deployment (by @dg) extension for Nette Framework"
  },
  "dev": {
    "name": "dev",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":godmode: Set of tools for development / debugging (@nette)"
  },
  "di": {
    "name": "di",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/di (@nette)"
  },
  "dummy-events": {
    "name": "dummy-events",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":repeat: Ultra simple events system for Nette Framework"
  },
  "event-application-bridge": {
    "name": "event-application-bridge",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": "[ARCHIVED] :recycle: Bridge between event dispatcher & nette application "
  },
  "event-bridges": {
    "name": "event-bridges",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": "[ARCHIVED] :package: Collection of all event dispatcher bridges (:recycle:) to nette at one place "
  },
  "event-dispatcher-extra": {
    "name": "event-dispatcher-extra",
    "category": "symfony",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":recycle: Nette-based Symfony events for application, presenter, form, latte, templates, security and many others."
  },
  "event-security-bridge": {
    "name": "event-security-bridge",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": "[ARCHIVED] :recycle: Bridge between event dispatcher & nette security"
  },
  "facebook": {
    "name": "facebook",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":yum: Tiny Facebook SDK 5.x integration to Nette Framework"
  },
  "fio": {
    "name": "fio",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":euro: Fio API integration for Nette Framework"
  },
  "forms": {
    "name": "forms",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/forms (@nette)"
  },
  "generator-nette": {
    "name": "generator-nette",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":man: Yeoman & Nette Framework"
  },
  "http": {
    "name": "http",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/http (@nette)"
  },
  "latte": {
    "name": "latte",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/latte (@nette)"
  },
  "latte-email": {
    "name": "latte-email",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":point_right: Email protection for emails in Latte templates"
  },
  "latte-parsedown-extra": {
    "name": "latte-parsedown-extra",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":tractor: Parsedown (markdown) template parser for Nette \\ Latte (@nette)"
  },
  "live-form-validation": {
    "name": "live-form-validation",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":no_entry: Nice client-side live form validation for Nette Forms."
  },
  "logging": {
    "name": "logging",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":boom: Universal logging support to Tracy / Nette Framework (@nette)"
  },
  "mail": {
    "name": "mail",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/mail (@nette)"
  },
  "mailing": {
    "name": "mailing",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":mailbox_with_mail: Sending emails with pleasure and prepared templates."
  },
  "middlewares": {
    "name": "middlewares",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":boom: Middlewares / Relay / PSR-7 support to Nette Framework (@nette)"
  },
  "mobilni-platby": {
    "name": "mobilni-platby",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":moneybag: MobilniPlatby.cz for Nette Framework"
  },
  "model": {
    "name": "model",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":boom: View-Model + Model-View layer to Nette Framework (@nette)"
  },
  "neonizer": {
    "name": "neonizer",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":wrench: Collection of useful scripts for manipulaton with NEON files. Support composer pre-install / post-install events. Set/get parameters, validate files."
  },
  "nextras-criteria": {
    "name": "nextras-criteria",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": "Criteria Expression for Nextras\\ORM + Nextras\\DBAL (@nextras)"
  },
  "nextras-orm-events": {
    "name": "nextras-orm-events",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":wolf: Doctrine-like events for Nextras ORM"
  },
  "nextras-orm-generator": {
    "name": "nextras-orm-generator",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":wolf: Nextras\\ORM entity generator"
  },
  "nextras-orm-query-object": {
    "name": "nextras-orm-query-object",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":wolf: Query-objects for Nextras ORM"
  },
  "phpdoc": {
    "name": "phpdoc",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":boom: Enhanced PHPdoc to Nette Framework with annotations (@nette)"
  },
  "playground": {
    "name": "playground",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":books: Examples / tutorials / tips / samples | sandbox for @contributte"
  },
  "psr11-container-interface": {
    "name": "psr11-container-interface",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":dizzy: PSR #11 [Container Interface] to Nette Framework (@nette)"
  },
  "psr3-logging": {
    "name": "psr3-logging",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":dizzy: PSR #3 [Logger Interface] to Nette Framework (@nette)"
  },
  "psr6-caching": {
    "name": "psr6-caching",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":dizzy: PSR #6 [Caching Interface] to Nette Framework (@nette)"
  },
  "psr7-http-message": {
    "name": "psr7-http-message",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":dizzy: PSR #7 [HTTP Message Interface] to Nette Framework (@nette)"
  },
  "reCAPTCHA": {
    "name": "reCAPTCHA",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":bangbang: Google reCAPTCHA (security) for Nette Framework \\ Forms"
  },
  "routing": {
    "name": "routing",
    "category": "nette-contrib",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/routing (@nette)"
  },
  "scheduler": {
    "name": "scheduler",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":hourglass: PHP job scheduler (cron) with locking for Nette Framework"
  },
  "security": {
    "name": "security",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/security (@nette)"
  },
  "server-timing": {
    "name": "server-timing",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":watch: Server Timing API profiling for Nette Framework "
  },
  "seznamcaptcha": {
    "name": "seznamcaptcha",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":exclamation: Seznam captcha (security) for Nette Framework \\ Forms"
  },
  "social": {
    "name": "social",
    "enabled": true,
    "priority": 0,
    "docs": "v0",
    "description": ":fries: Social plugins  (facebook, twitter, google) for Nette Framework"
  },
  "symfonier": {
    "name": "symfonier",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":sunflower: Adaptation of Symfony principles to Nette Framework (@nette) "
  },
  "tracy": {
    "name": "tracy",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sunglasses: Tuned Tracy Bars/Panels/BlueScreens for easy-developing"
  },
  "utils": {
    "name": "utils",
    "category": "nette-contrib",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":sparkles: Extra contrib to nette/utils (@nette)"
  },
  "website": {
    "name": "website",
    "enabled": false,
    "priority": 0,
    "docs": "v1",
    "description": ":squirrel: Contributte Website & Docs"
  },
  "wordcha": {
    "name": "wordcha",
    "enabled": true,
    "priority": 0,
    "docs": "v1",
    "description": ":exclamation: Word based captcha (security) for Nette Framework \\ Forms (@nette)"
  }
};

module.exports = {
  repositories
};
