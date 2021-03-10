---
layout: PostLayout
title: 6 reasons for contributte/translation package
date: 2019-08-17 14:00
author: aleswita
---

# 6 reasons for contributte/translation package

1. Tiniest implementation to Nette Framework, thats include only 10 services (9 in production mode)
2. No unnecessary dependencies
3. Uses strict types and scalar and return type hints
4. Tests coverage hitting 100%
5. Ready for Symfony 5
6. For implementation you need only 9 lines of code

Install dependencies:

```bash
composer require contributte/translation
```

File `app/config/contributte.neon`:

```neon
extensions:
	translation: Contributte\Translation\DI\TranslationExtension

translation:
locales:
	default: en
	dirs:
		- %appDir%/lang
```

File `app/lang/messages.en_US.neon`:

```neon
helloWorld: "Hello world"
```

Some latte template:

```latte
latte: {_helloWorld}
```

<Explanation class="mt-12" type="package"><a class="text-white" href="/packages/contributte/translation.html">Try contributte/translation package →</a></Explanation>
