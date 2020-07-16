---
layout: PostLayout
title: Embedding of services with contributte/di
date: 2019-08-17 17:00
author: mabar
---

# Embedding of services with contributte/di

Contributte packages with custom services registration (like [contributte/monolog](/packages/contributte/monolog.html#configuration), 
[contributte/mail](/packages/contributte/mail.html#mailextension) or [contributte/flysystem](/packages/contributte/flysystem.html#configuration)) 
in last, Nette 3 compatible version, support flexible registration of services.

You can now either register services same way as in services neon section or reference an existing service. All of the following syntaxes are possible:

```yaml
post:
  mailer: Contributte\Mail\Mailer\SendmailMailer
  # or
  mailer: Contributte\Mail\Mailer\SendmailMailer()
  # or
  mailer:
    factory: Contributte\Mail\Mailer\SendmailMailer
  # or
  mailer: @mailerServiceName
```

It is for case when it's useful to be more explicit about which services the extension should use instead of finding all services by an interface.

To implement it in your extension we prepared little helper in [contributte/di](/packages/contributte/di).

```php
$definitionsHelper = new ExtensionDefinitionsHelper($this->compiler);
$serviceDefinition = $definitionsHelper->getDefinitionFromConfig($serviceConfig, $preferedServiceName);
```

- `$preferedServiceName` is used for service name only if service already don't have one (case with `@mailerServiceName`)
- `$serviceDefinition` is usually a Definition instance, but it could also be a service name represented by string (e.g. when helper is used in `loadConfiguration()` phase while service is defined in services section of neon - services from neon are not loaded yet so we can work only with reference)

Service registered in this way should be also validated semantically. Use this little snippet in your config schema `Expect::anyOf(Expect::string(), Expect::array(), Expect::type(Statement::class))`.

We are using it in [contributte/mail](https://github.com/contributte/mail/blob/e3e420f74bc3005583585d5f1bc5b1c5ea99d968/src/DI/MailExtension.php#L36) just like that.

```php
public function getConfigSchema(): Schema
{
  return Expect::structure([
    'mode' => Expect::anyOf(...self::MODES)->default(self::MODE_STANDALONE),
    'mailer' => Expect::anyOf(Expect::string(), Expect::array(), Expect::type(Statement::class))->required(),
    'debug' => Expect::bool(false),
  ]);
}
```

<Explanation class="mt-12" type="package"><a class="text-white" href="/packages/contributte/di.html">Try contributte/di package →</a></Explanation>
