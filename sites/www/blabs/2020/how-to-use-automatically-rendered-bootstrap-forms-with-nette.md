---
layout: PostLayout
title: How to use automatically rendered Bootstrap (4) forms with Nette Framework
date: 2020-02-21 19:00
author: dakorpar
---

# How to use automatically rendered Bootstrap (4) forms with Nette Framework
​
Goal of this blog post is to give you quick introduction to [contributte/forms-bootstrap](https://github.com/contributte/forms-bootstrap) package and how it can be used inside your project.
​
## Benefits
​
This package is build on top of nette forms and adds few interesting functionalities to nette forms. 

 - Boostrap 4 renderer with 3 different render modes (vertical, inline and side by side)
 - Built-in AJAX support through `ajax`property
 - All regular controls are extended with bootstrap-enabled controls 
 - Grid support so you can render forms into multiple columns directly without manual rendering
 - Additional Date/DateTime inputs
 - Ability of assisted manual rendering (renders  whole`div.form-group` label, input and validation messages with one latte filter)
​
## Instalation
​
Best and easiest way to install package is with composer.
​
```bash

composer require contributte/forms-bootstrap
```

## Usage
​
It's pretty simmiliar to [nette/forms](https://doc.nette.org/en/3.0/forms) with some additional features.
This quick example:
​
```php
$form->addText('title', 'Title')->setRequired();  
$form->addTextArea('content', 'Content', 50, 25);  
$form->addDateTime('start_date', 'Start date');   
$form->addSubmit('save', 'Save');
```
​
By default bootstrap theme would look something like that:
​
<div class="m-4 my-8">
  <img src="https://cdn.contributte.org/blabs/form-bootstrap.png" loading="lazy">
</div>
​​
<Explanation class="mt-12" type="package"><a class="text-white" href="/packages/contributte/forms-bootstrap.html">Try contributte/forms-bootstrap package →</a></Explanation>
