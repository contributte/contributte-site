---
layout: HighLayout
metaTitle: Nettrine - Easy & smart integration of Doctrine2 to Nette Framework
meta:
  - name: keywords
    content: php, nette, nette framework, database, doctrine, db, dbal, console, events, listeners
---

<div class="homepage">
  <header class="hero">
    <h1>
      Nettrine<br>
      <img src="/nettrine.png" alt="Nettrine" title="Nettrine logo" width="150">
    </h1>
    <p class="description">
      Easy & smart integration of Doctrine2 to Nette Framework
    </p>
    <p class="action">
      <a href="/packages/nettrine/dbal/" class="nav-link action-button">DBAL →</a>
      <a href="/packages/nettrine/orm/" class="nav-link action-button">ORM →</a>
      <a href="/examples/#nettrine" class="nav-link action-button">Playground</a>
    </p>
  </header>
</div>

## Installation

Add to your current project using composer.

```
composer require nettrine/dbal nettrine/orm
```

Or take a look at examples.

```sh
composer create-project --repository https://github.com/planette/playground
```

## Configuration

Setup your configuration in NEON files.

```yaml
extensions:

	# Dbal
	dbal: Nettrine\DBAL\DI\DbalExtension
	dbal.console: Nettrine\DBAL\DI\DbalConsoleExtension

	# Orm
	orm: Nettrine\ORM\DI\OrmExtension
	orm.cache: Nettrine\ORM\DI\OrmCacheExtension
	orm.console: Nettrine\ORM\DI\OrmConsoleExtension
	orm.annotations: Nettrine\ORM\DI\OrmAnnotationsExtension

dbal:
	debug: %debugMode%
	connection:
		driver: %database.driver%
		host: %database.host%
		user: %database.user%
		password: %database.password%
		dbname: %database.dbname%

orm:
	configuration:
		autoGenerateProxyClasses: %debugMode%

orm.annotations:
	debug: %debugMode%
	paths:
		- %appDir%/model/Database/Entity

orm.cache:
	defaultDriver: apcu
```

Setup connection to database in `config.local.neon`.

```yaml
parameters:
	database:
		host: localhost
		dbname: nutella
		user: nutella
    password: nutella
```

## Usage

```php
<?php declare(strict_types = 1);

namespace App\Model;

use App\Model\Database\EntityManager;

final class Foobar
{

	/** @var EntityManager */
	private $em;

	public function __construct(EntityManager $em)
	{
		$this->em = $em;
	}

  public function foo():
  {
    $user = $this->em->getUserRepository()->findOneBy(['email' => 'milan@sulc.dev']);
  }

}
```
