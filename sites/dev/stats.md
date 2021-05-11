---
pageClass: status
---

<table>
  <tr>
    <th>Github</th>
    <th>Stars</th>
    <th>Issues</th>
    <th>PRs</th>
    <th>License</th>
    <th>Release</th>
    <th>Unrelease <br> (commits)</th>
    <th>Github Actions</th>
    <th>Travis</th>
    <th>PM <br> (composer / npm)</th>
    <th>Downloads <br> (monthly)</th>
    <th>Downloads <br> (total)</th>
  </tr>
  <tr v-for="(repository) of $page.contributte.repositories">
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}`" target="_blank">
        {{ repository.org }} / {{ repository.name }}
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/stargazers`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/github/stars/${repository.org}/${repository.name}/`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/issues`" target="_blank" class="flex flex-col items-center justify-center space-y-2">
        <img lazy="true" :src="`https://badgen.net/github/open-issues/${repository.org}/${repository.name}/?color=green`">
        <img lazy="true" :src="`https://badgen.net/github/issues/${repository.org}/${repository.name}`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/pulls`" target="_blank" class="flex flex-col items-center justify-center space-y-2">
        <img lazy="true" :src="`https://badgen.net/github/open-prs/${repository.org}/${repository.name}/?color=green`">
        <img lazy="true" :src="`https://badgen.net/github/prs/${repository.org}/${repository.name}/`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/github/license/${repository.org}/${repository.name}/`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/releases`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/github/release/${repository.org}/${repository.name}/`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/commits/master`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/https/label.now.sh/github/unreleased/${repository.org}/${repository.name}/`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/actions`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/github/checks/${repository.org}/${repository.name}`">
      </a>
    </td>
    <td>
      <a :href="`https://travis-ci.org/${repository.org}/${repository.name}`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/travis/${repository.org}/${repository.name}/`">
      </a>
    </td>
    <td>
      <div class="flex flex-col items-center justify-center space-y-2">
        <a v-if="repository.pm && repository.pm.composer" :href="`https://packagist.org/packages/${repository.pm.composer}`" target="_blank">
          <img lazy="true" :src="`https://badgen.net/packagist/php/${repository.pm.composer}/latest`">
        </a>
        <a v-if="repository.pm && repository.pm.npm" :href="`https://www.npmjs.com/package/${repository.pm.npm}`" target="_blank">
          <img lazy="true" :src="`https://badgen.net/npm/v/${repository.pm.npm}/`">
        </a>
      </div>
    </td>
    <td>
      <div class="flex flex-col items-center justify-center space-y-2">
        <a v-if="repository.pm && repository.pm.composer" :href="`https://packagist.org/packages/${repository.pm.composer}`" target="_blank">
          <img lazy="true" :src="`https://badgen.net/packagist/dm/${repository.pm.composer}/`">
        </a>
        <a v-if="repository.pm && repository.pm.npm" :href="`https://www.npmjs.com/package/${repository.pm.npm}`" target="_blank">
          <img lazy="true" :src="`https://badgen.net/npm/dm/${repository.pm.npm}/`">
        </a>
      </div>
    </td>
    <td>
      <div class="flex flex-col items-center justify-center space-y-2">
        <a v-if="repository.pm && repository.pm.composer" :href="`https://packagist.org/packages/${repository.pm.composer}`" target="_blank">
          <img lazy="true" :src="`https://badgen.net/packagist/dt/${repository.pm.composer}/`">
        </a>
        <a v-if="repository.pm && repository.pm.npm" :href="`https://www.npmjs.com/package/${repository.pm.npm}`" target="_blank">
          <img lazy="true" :src="`https://badgen.net/npm/dt/${repository.pm.npm}/`">
        </a>
      </div>
    </td>
  </tr>
</table>
