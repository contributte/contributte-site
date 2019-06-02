---
metaTitle: '<%= $repository.org+" / "+$repository.name %> - <%= $repository.description %>'
meta:
  - name: description
    content: '<%= $repository.description %>'
  - name: keywords
    content: php, nette, <%= $repository.org %>, <%= $repository.name %>
---

<div class="metainfo">
  <ul class="gbuttons">
    <li>
      <div class="button-group">
        <div class="button-label">
          <a href="https://github.com/<%= $repository.org+"/"+$repository.name %>">Github</a>
        </div>
      </div>
    </li>
    <li>
      <div class="button-group">
        <div class="button-label">Composer</div>
        <div class="button-value">
          <a href="https://packagist.org/packages/<%= $repository.org+"/"+$repository.name %>"><%= $_packagist %></a>
        </div>
      </div>
    </li>
    <li>
      <div class="button-group">
        <div class="button-label">Stars</div>
        <div class="button-value">
          <a href="https://github.com/<%= $repository.org+"/"+$repository.name %>"><%= $repository.stars %></a>
        </div>
      </div>
    </li>
    <li>
      <div class="button-group">
        <div class="button-label">Issues</div>
        <div class="button-value">
          <a href="https://github.com/<%= $repository.org+"/"+$repository.name %>"><%= $repository.issues %></a>
        </div>
      </div>
    </li>
    <li>
      <div class="button-group">
        <div class="button-label">Forks</div>
        <div class="button-value">
          <a href="https://github.com/<%= $repository.org+"/"+$repository.name %>"><%= $repository.forks %></a>
        </div>
      </div>
    </li>
  </ul>
</div>

<%= $readme %>
