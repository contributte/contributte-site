---
layout: HighLayout
metaTitle: Ninjify - PHP nunchucks for you coding dojo
meta:
  - name: keywords
    content: php, nette, nette framework, ninjify, code style, quality assurance, code sniffer
---

<div class="homepage">
  <header class="hero">
    <h1>
      Ninjify<br>
      <img src="/ninjify.png" alt="Ninjify" title="Ninjify logo" width="150">
    </h1>
    <p class="description">
      Ninjify - PHP nunchucks for you coding dojo
    </p>
    <p class="action">
      <a href="https://github.com/ninjify/" class="nav-link action-button">Get Started →</a>
    </p>
  </header>
</div>

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

![Codesniffer](/misc/ninjify-console.png "Ninjify Codesniffer")
