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
4. Tests coverege hitting 100%
5. Ready for Symfony 5
6. For implementation you need only 9 lines of code

  Install dependencies:

  ```
  composer require contributte/translation
  ```

  File `app/config/contributte.neon`:

  ```yaml
  extensions:
    translation: Contributte\Translation\DI\TranslationExtension

  translation:
    locales:
        default: en
    dirs:
        - %appDir%/lang
  ```

  File `app/lang/messages.en_US.neon`:

  ```
  helloWorld: "Hello world"
  ```

  Some latte template:

  ```smarty
  latte: {_helloWorld}
  ```

<p class="explanation explanation--package mt-6"><a href="/packages/contributte/translation.html">Try contributte/translation package →</a></p>
