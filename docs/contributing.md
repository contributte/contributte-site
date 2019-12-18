---
layout: HighLayout
metaTitle: How To Contribute?
---

<h1>Contributing</h1>

<p>
  We are happy to see you contributing into our ecosystem. 
</p>

<p>
  Let's picture you woud like to improve following repository <a class="underline" href="https://github.com/contributte/bare/">contributte/bare</a>.
</p>

<ol class="mt-8 list-inside list-decimal">
    <li>Clone particular repository, <code>git clone git@github.com:contributte/bare.git</code>.</li></li>
    <li>Create a new branch <code>git checkout -b feature/foobar</code>.</li>
    <li>
      Install dependencies.
      <ul class="list-inside list-disc ml-4">
        <li>PHP <code>composer install</code>.</li>
        <li>NPM <code>npm install</code>.</li>
      </ul>
    </li>
    <li>
      Discover <strong>Makefile</strong> file.
      <ul class="list-inside list-disc ml-4">
        <li>Check codestyle <code>make cs</code>.</li>
        <li>Repair codestyle <code>make csf</code>.</li>
        <li>Run phpstan <code>make phpstan</code>.</li>
        <li>Run tests <code>make tests</code>.</li>
        <li>Calculate coverage <code>make coverage</code>.</li>
      </ul>
    </li>
    <li>Change the code.
    <li>Commit all changes <code>git add .</code> & <code>git commit -a "Feature: added new foobar"</code>.</li>
    <li>Push the new branch <code>git push origin feature/foobar</code>.</li>
    <li>Open PR at particular repository <a class="underline" href="https://github.com/contributte/bare/pulls">contributte/bare/pulls</a>.
    <li>Profit and glory!</li>
  </ol>
