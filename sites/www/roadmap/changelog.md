---
layout: MarkdownLayout
---

# Changelog

What we actually did and why. Do you have some feedback? Please [let us know](/about.html).

<div class="mt-16 pb-5 border-b border-gray-200">
  <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
    <h3 class="ml-2 mt-2 text-2xl leading-6 font-medium">
      2021
    </h3>
    <p class="ml-2 mt-1 text-sm text-gray-500 truncate">Still going...</p>
  </div>
</div>

### Newbies

- https://github.com/contributte/imagist
- https://github.com/contributte/fileupload

<div class="pb-5 border-b border-gray-200 mt-16">
  <h2 class="text-2xl leading-6 font-medium">2020</h2>
</div>

The year of getting all on board and set some standards to our ecosystem.

### Team

Contributte organization has 2 new members.

- [@Roman3349](https://github.com/Roman3349)

This year our hardworking member [@mabar](https://github.com/mabar) goes his own way. Thank you for the fish.

### Acquisitions

We are glad to introduce you newcomes repositories from [Gamee](https://github.com/gamee), [Joseki](https://github.com/joseki), [Oops](https://github.com/o2ps) manufature.

- https://github.com/contributte/rabbitmq
- https://github.com/contributte/jsonrpc
- https://github.com/contributte/pdf
- https://github.com/contributte/webpack

### Newbies

- https://github.com/contributte/elastica
- https://github.com/contributte/aop
- https://github.com/contributte/oauth2-server
- https://github.com/contributte/tester
- https://github.com/contributte/qa
- https://github.com/contributte/ui

### Focus

**CI/CD**

We are moving from Travis to Github Actions. It seems they can provider better developer experience (DX) and are really **faaast**.

**New Readmes**

Our preciouse readme(s) have new look & feel.

**Standards**

We are working hard to standardise all repositories to single development mainline (QA, tests, phpstan, readme).

- https://github.com/contributte/api-router
- https://github.com/contributte/api-docu
- https://github.com/contributte/anabelle

**Website**

We are focuing on user-friendly pages and speed. Images are served from CDN (https://imagekit.io/).

<div class="pb-5 border-b border-gray-200 mt-16">
  <h2 class="text-2xl leading-6 font-medium">2019</h2>
</div>

This is a recap for 2019 for Contributte ecosystem.

### Standards

### Team

Contributte organization has 2 new members.

- [@aleswita](https://github.com/aleswita)
- [@martkcz](https://github.com/martkcz)

### Acquisitions

[@paveljanda](https://github.com/paveljanda) is finally fully part of the contributte organization. That's good news.
We're working to bring you more packages from ublaboo to contributte.

### Focus

**Website**

Static site generation proved its potential. Other world famouse sites are using static site generating.
VuePress builds site into HTML + CSS + JS and these files are hosted on [ZEIT](https://zeit.co/).

<div class="pb-5 border-b border-gray-200 mt-16">
  <h2 class="text-2xl leading-6 font-medium">2018</h2>
</div>

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

For now, there is just API example, which is quite old and contributte/api has been transformed into Apitte anyway. Latest example of working API is in [contributte/apitte-skeleton](https://github.com/contributte/apitte-skeleton).

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

<div class="pb-5 border-b border-gray-200 mt-16">
  <h2 class="text-2xl leading-6 font-medium">2017</h2>
</div>


The idea of Contributte is growing. People are joining, that's great.

More packages have been created:

- https://github.com/contributte/event-dispatcher
- https://github.com/contributte/application
- https://github.com/contributte/utils
- https://github.com/contributte/nextras-orm-query-object
- https://github.com/contributte/nextras-orm-events
- https://github.com/contributte/seznamcaptcha

<div class="pb-5 border-b border-gray-200 mt-16">
  <h2 class="text-2xl leading-6 font-medium">2016</h2>
</div>

The main idea was born. Here is [described](https://blog.nette.org/en/interview-with-milan-sulc-about-contributte-and-open-source) my (Felix) little journey, what I am doing, etc.

First package in Contributte was [console](https://github.com/contributte/console).
