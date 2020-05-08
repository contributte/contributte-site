---
layout: MarkdownLayout
---

# Recap

What we have actually did?


## 2020 (WIP)

The year of getting all on board and set some standards to our ecosystem.

### Acquisitions

We are glad to introduce you newcomes repositories from Gamee manufature.

- https://github.com/contributte/rabbitmq
- https://github.com/contributte/jsonrpc

### Standards

We are working hard to standardise all repositories to single development mainline (QA, tests, phpstan, readme).

- https://github.com/contributte/api-router
- https://github.com/contributte/api-docu
- https://github.com/contributte/anabelle

### Website

We are focuing on user-friendly pages and speed. Images are served from CDN (https://imagekit.io/).


<div class="mt-16"></div>


## 2019

This is a recap for 2019 for Contributte ecosystem.

### Standards

### Team

Contributte organization has 2 new members.

- [@aleswita](https://github.com/aleswita)
- [@martkcz](https://github.com/martkcz)

### Acquisitions

[@paveljanda](https://github.com/paveljanda) is finally fully part of the contributte organization. That's good news.
We're working to bring you more packages from ublaboo to contributte.

### Website

Static site generation proved its potential. Other world famouse sites are using static site generating.
VuePress builds site into HTML + CSS + JS and these files are hosted on [ZEIT](https://zeit.co/). 


<div class="mt-16"></div>


## 2018

This is a recap for 2018 for Contributte ecosystem.

### Standards

Transform to contributte (composer, namespace, codesniffer, PHP 7.1):

- https://github.com/contributte/dummy-events
- https://github.com/contributte/social
- https://github.com/contributte/deployer-extension
- https://github.com/contributte/mobilni-platby
- https://github.com/contributte/nextras-orm-query-object
- https://github.com/contributte/image-storage
- https://github.com/contributte/api-router
- https://github.com/contributte/api-docu
- https://github.com/contributte/anabelle

### PSR

Create PSR-based repositories for Nette/Contributte applications:

- https://github.com/contributte/psr7-http-message
- https://github.com/contributte/psr11-container-interface
- https://github.com/contributte/psr6-caching
- https://github.com/contributte/psr3-logging

### New packages

We still have been missing some tiny integrations of:

- Monolog
- Redis
- Facebook
- Symfony Validator
- Symfony Translator
- Google

These packages have their implementations in Kdyby ([Validator](https://github.com/Kdyby/Validator), [Monolog](https://github.com/Kdyby/Monolog), etc..). But Kdyby has unsure/unpredictable future and Kdyby's integrations are little bit fat (my feelings only).

### Acquisitions

**Ublaboo**

We've been working with [@paveljanda](https://github.com/paveljanda) on big top-secret project about contributte and ublaboo. First swallow you could notice in [contributte/application repository](https://github.com/contributte/application/pull/12).

**Arachne**

We've been working with [@mabar](https://github.com/mabar) / [@enumag](https://github.com/enumag) on back-porting [Arachne](https://github.com/arachne) into [Contributte](https://github.com/contributte).
See more in special issue, [#2](https://github.com/contributte/contributte/issues/2), for that transfer.

### Cleanup

I'm not quite sure how to deal with some empty repositories. There're some good ideas and thoughts, but I don't have enough time. Maybe others? We'll see.

- https://github.com/contributte/model
- https://github.com/contributte/routing
- https://github.com/contributte/symfonier
- https://github.com/contributte/nextras-criteria

### Team

Contributte organization consists of 10 members, at this time.

- [@f3l1x](https://github.com/f3l1x)
- [@benijo](https://github.com/benijo)
- [@enumag](https://github.com/enumag)
- [@paveljanda](https://github.com/paveljanda)
- [@chemix](https://github.com/chemix)
- [@crempa](https://github.com/crempa)
- [@matyx](https://github.com/matyx)
- [@vody105](https://github.com/vody105)
- [@mabar](https://github.com/mabar)
- [@vojtamares](https://github.com/vojtamares)

Thank you guys for being in Contributte and try to do your best. Some of them improve 1 repository, some improve more then one.

### Website

Contributte is not a small project, we need a website. I would like to create something similar to this website (https://docusaurus.io/docs/en/installation.html), I like the schema/layout a lot.

We'll probably use Hugo as static generator, unless there'll a be big mind-changer in usage.

The game-changer in static sites generators is Vuepress (https://vuepress.vuejs.org/), looks simple and powerful. But I'm not sure how to handle multi-repo documentation.

We need to discuss it deeper.

### Playground

In Contributte we have the main goal to show **stable and working packages** to others, thus we are building our [**playground**](https://github.com/contributte/playground).

For now, there is just API example, which is quite old and contributte/api has been transformed into Apitte anyway. Latest example of working API is in [apitte/playgroud](https://github.com/apitte/playground).

We need to focus more on `playground`, examples and tutorials to spread our packages. Don't you think guys? Sure, you do.

Let's create some examples:

- contributte/console
- contributte/event-dispatcher
- contributte/middlewares
- contributte/forms + recaptcha
- and many others...

### Ideas

I am still active in Java development and there's a cool feature called **monads**. I would like to have someting similar in Contributte.

Some articles:

- https://examples.javacodegeeks.com/core-java/util/optional/java-8-optional-example/
- https://medium.com/@afcastano/monads-for-java-developers-part-1-the-optional-monad-aa6e797b8a6e
- https://blog.ircmaxell.com/2013/07/taking-monads-to-oop-php.html

> More then less we have done a hell great job and thanks to all guys around us.


<div class="mt-16"></div>


## 2017

The idea of Contributte is growing. People are joining, that's great.

More packages have been created:

- https://github.com/contributte/event-dispatcher
- https://github.com/contributte/application
- https://github.com/contributte/utils
- https://github.com/contributte/nextras-orm-query-object
- https://github.com/contributte/nextras-orm-events
- https://github.com/contributte/seznamcaptcha


<div class="mt-16"></div>


## 2016

The main idea was born. Here is [described](https://blog.nette.org/en/interview-with-milan-sulc-about-contributte-and-open-source) my (Felix) little journey, what I am doing, etc.

First package in Contributte was [console](https://github.com/contributte/console).
