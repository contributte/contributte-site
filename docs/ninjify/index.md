---
layout: HighLayout
home: true
heroText: Ninjify
tagline: PHP nunchucks for you coding dojo
actionText: Check it out →
actionLink: https://github.com/ninjify/
metaTitle: Ninjify - PHP nunchucks for you coding dojo
---

## Installation

Create new project using composer library.

```
composer create-project --repository https://github.com/planette/playground
```

Add to your current project using composer library.

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
