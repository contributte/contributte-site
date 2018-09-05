<div class="metainfo">
  <% if ($repository.releases && $repository.releases.last) { %>
  <div class="text-left">
    Latest release: <strong><%= $repository.releases.last.tag %></strong>
  </div>
  <% } %>
  <div class="text-right">
    <a href="https://github.com/<%= $repository.org+"/"+$repository.name %>" class="btn btn-success">Github</a>
    <% if (($repository.options && !$repository.options.packagist) || true) { %><a href="https://packagist.org/packages/<%= $repository.org+"/"+$repository.name %>" class="btn btn-warning">Packagist</a><% } %>
  </div>
</div>

<%= $readme %>
