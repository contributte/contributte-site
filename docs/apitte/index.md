---
layout: HeroLayout
metaTitle: Apitte - Modern PHP/PSR7 API framework build on top of Nette Framework
meta:
  - name: keywords
    content: php, nette, nette framework, apitte, api, psr7, request, response, content negotiation
---

<header class="text-center">
  <h1>Apitte</h1>
  <img class="m-auto" src="/apitte.png" alt="Apitte" title="Apitte logo" width="150">
  <p class="text-2xl text-gray-600">
    Modern PHP/PSR7 API framework build on top of Nette Framework
  </p>
    <p class="mt-6">
    <a href="/packages/apitte/core/" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started →</a>
    <a href="/examples.html#apitte" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Playground</a>
  </p>
</header>

<div class="mt-12 flex flex-wrap">
  <div class="md:w-1/3 sm:w-100 px-4 pb-6">
    <h2 class="text-2xl font-medium">PHP/PSR-7</h2>
    <p>Prepared and developed with PHP-FIG <a href="https://www.php-fig.org/psr/psr-7/" target="blank">PHP/PSR-7</a> in mind. Use familiar HTTP PSR-7 objects in your code and do not learn any proprietary solutions.</p>
  </div>
  <div class="md:w-1/3 sm:w-100 px-4 pb-6">
    <h2 class="text-2xl font-medium">OpenAPI</h2>
    <p>Enjoy standardized REST APIs documentation in <a href="https://www.openapis.org/" target="blank">OpenAPI</a> format and use famous <a href="https://swagger.io/" target="blank">Swagger</a> API tools. Make your API discoverable in seconds.</p>
  </div>
  <div class="md:w-1/3 sm:w-100 px-4 pb-6">
    <h2 class="text-2xl font-medium">Content negotiation</h2>
    <p>Represent output data in many forms. Develop with <code>.debug</code> representation and download as <code>.csv</code> or whatever else only by URL suffix change.</p>
  </div>
  <div class="md:w-1/3 sm:w-100 px-4 pb-6">
    <h2 class="text-2xl font-medium">Middlewares</h2>
    <p>Develop rich API apps witch complex behaviour in simple and readable form by composing custom middlewares.</p>
  </div>
  <div class="md:w-1/3 sm:w-100 px-4 pb-6">
    <h2 class="text-2xl font-medium">Fast debug</h2>
    <p>Find problems, log errors, dump variables and debug in seconds thanks to full <a href="https://tracy.nette.org/en/" target="blank">Tracy</a> library integration.</p>
  </div>
  <div class="md:w-1/3 sm:w-100 px-4 pb-6">
    <h2 class="text-2xl font-medium">Dependency injection</h2>
    <p>Based on fully featured <a href="https://doc.nette.org/en/3.0/dependency-injection" target="blank">Nette Dependency Injection</a> container. Make your apps simple readable and testable.</p>
  </div>
  <div class="md:w-1/3 sm:w-100 px-4 pb-6">
    <h2 class="text-2xl font-medium">Open source</h2>
    <p>Released under MIT license. <a href="https://github.com/apitte" target="blank">Fork it</a>, modify it, use it in your way.</p>
  </div>
  <div class="md:w-1/3 sm:w-100 px-4 pb-6">
    <h2 class="text-2xl font-medium">Nette Framework</h2>
    <p>Do you need rich API solution for your <a href="https://nette.org/en/" target="blank">Nette Framework</a> application? We prepared direct integration for you.</p>
  </div>
  <div class="md:w-1/3 sm:w-100 px-4 pb-6">
    <h2 class="text-2xl font-medium">REST ready</h2>
    <p>Create fully customizable and validated rich REST APIs. Make more versions of your REST API in moments.</p>
  </div>
</div>
</div>

## Installation

Add to your current project using composer.

```
composer require apitte/fullstack
```

Or take a look at examples.

```sh
composer create-project --repository https://github.com/planette/playground
```

----

## Examples

### Simple controller

Just return data as array and let **Apitte** to create correct response for you.

[See more →](https://github.com/planette/playground/blob/master/apitte-fullstack/app/controllers/HomeController.php)

```php
/**
  * @Controller
  * @ControllerPath("/users")
  * @ControllerId("users")
  */
final class UsersController extends BaseV2Controller
{

  /**
    * @Id("index")
    * @Path("/")
    * @Method("GET")
    */
  public function index()
  {
    return [
      ['id' => 1, 'nick' => 'Chuck Norris'],
      ['id' => 2, 'nick' => 'Felix'],
    ];
  }
}
```

### Prepared exceptions

Use prepared exceptions and send correct error codes as simple as possible.

[See more →](https://github.com/planette/playground/blob/master/apitte-fullstack/app/controllers/ErrorController.php)

```php
<?php

	/**
	 * @Controller
	 * @ControllerPath("/error")
	 */
	final class ErrorController extends BaseV1Controller
	{
		/**
		 * @Path("/client")
		 * @Method("GET")
		 */
		public function client()
		{
			throw ClientErrorException::create()
				->withCode(403)
				->withContext(['a' => 'b']);
		}
  }
```

### Simple configuration

Configure middlewares, setup plugins and register controllers in few lines of code.

[See more →](https://github.com/planette/playground/blob/master/apitte-fullstack/app/config/config.neon)

```yaml
extensions:
  middlewares: Contributte\Middlewares\DI\MiddlewaresExtension
  resource: Contributte\DI\Extension\ResourceExtension
  api: Apitte\Core\DI\ApiExtension

resource:
  resources:
    App\Controllers\:
      paths: [%appDir%/controllers]
      decorator:
        inject: true
api:
  plugins:
    Apitte\Debug\DI\DebugPlugin:
    Apitte\Middlewares\DI\MiddlewaresPlugin:
    Apitte\Negotiation\DI\NegotiationPlugin:
      unification: on
    Apitte\Mapping\DI\MappingPlugin:
    Apitte\OpenApi\DI\OpenApiPlugin:
```
