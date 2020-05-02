---
layout: HeroLayout
metaTitle: Ninjify - PHP nunchucks for you coding dojo
meta:
  - name: keywords
    content: php, nette, nette framework, ninjify, code style, quality assurance, code sniffer
---

<header class="text-center">
  <h1>Ninjify</h1>
  <img class="m-auto" src="https://avatars.githubusercontent.com/ninjify" alt="Ninjify" title="Ninjify logo" width="150">
  <p class="text-2xl text-gray-600">
    Ninjify - PHP nunchucks for you coding dojo
  </p>
    <p class="mt-6">
    <a href="[/packages/apitte/core.html](https://github.com/ninjify/)" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started →</a>
  </p>
</header>

## Installation

Add to your current project using composer.

```
composer require ninjify/qa
```

## Setup

Create file **[project]/ruleset.xml**

```xml
<?xml version="1.0"?>
<ruleset>
  <!-- Contributte Coding Standard -->
  <rule ref="./vendor/ninjify/coding-standard/contributte.xml">
    <!-- Exclude some rules -->
    <exclude name="Squiz.Commenting.FunctionComment.InvalidTypeHint"/>
  </rule>

  <!-- Specific rules -->
  <rule ref="SlevomatCodingStandard.Files.TypeNameMatchesFileName">
      <properties>
          <property name="rootNamespaces" type="array" value="
              src=>Acme\Project,
              tests/fixtures=>Tests\Fixtures
          "/>
      </properties>
  </rule>

  <!-- Exclude folders -->
  <exclude-pattern>/tests/tmp</exclude-pattern>
</ruleset>
```

## Usage

Once you have prepared **ruleset.xml** and have all dependencies in your **composer.json**, 
you can run these commands.

**Analyse code**

```
vendor/bin/codesniffer src tests
```

**Fixup codestyle**

```
vendor/bin/codefixer src tests
```

## Demo

This is example of running codesniffer.

```
vendor/bin/codesniffer src tests
```

Or via composer script.

```
vendor/bin/codesniffer src tests
```

<p>
  <img class="m-auto" src="https://cdn.contributte.org/misc/ninjify-console.png" alt="Codesniffer" title="Ninjify Codesniffer" loading="lazy">
</p>
