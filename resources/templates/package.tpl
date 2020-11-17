---
metaTitle: '<%= $repository.org+" / "+$repository.name %> - <%= $repository.description %>'
meta:
  - name: description
    content: '<%= $repository.description %>'
  - name: keywords
    content: nette, nette framework, contributte, php, composer, npm, library, <%= $repository.org %>, <%= $repository.name %>
layout: PackageLayout
git:
  org: <%= $repository.org %>
  name: <%= $repository.name %>
  updated: <%= $repository.updated %>
---

<div class="pb-8 border-b border-gray-300">
  <h1><%= $title %></h1>
  <div></div>
  <div class="flex flex-col space-y-2 mt-2">
    <div class="flex flex-row space-x-2 items-center">
      <img class="opacity-50" loading="lazy" src="https://obr.now.sh/fa/b/github/16"/>
      <a href="https://github.com/<%= $repository.org+"/"+$repository.name %>">github.com/<%= $repository.org+"/"+$repository.name %></a>
    </div>
    <% if($repository.pm.composer){ %><div class="flex flex-row space-x-2 items-center">
      <img class="opacity-50" loading="lazy" src="https://obr.now.sh/fa/s/download/16"/>
      <a href="https://packagist.org/packages/<%= $repository.pm.composer %>" target="_blank">packagist.org/packages/<%= $repository.pm.composer %></a>
    </div><% } %><% if($repository.pm.npm){ %><div class="flex flex-row space-x-2 items-center">
      <img class="opacity-50" loading="lazy" src="https://obr.now.sh/fa/s/download/16"/>
      <a href="https://npmjs.com/package/<%= $repository.pm.npm %>" target="_blank">npmjs.com/package/<%= $repository.pm.npm %></a>
    </div><% } %>
  </div>
</div>

<%= $readme %>
