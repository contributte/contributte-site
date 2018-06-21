<div class="metainfo">
  <% if ($repository.releases && $repository.releases.last) { %>
  <div class="text-left">
    Latest release: <strong><%= $repository.releases.last.tag %></strong>
  </div>
  <% } %>
  <div class="text-right">
    <a href="https://github.com/<%= $organization+"/"+$repository.name %>" class="btn btn-success">Github</a>
    <a href="https://packagist.org/packages/<%= $organization+"/"+$repository.name %>" class="btn btn-warning">Packagist</a>
  </div>
</div>

<%= $readme %>
