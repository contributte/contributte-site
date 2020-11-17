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
        <img lazy="true" :src="`https://badgen.net/github/stars/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/issues`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/github/issues/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/pulls`" target="_blank" class="flex space-x-2">
        <img lazy="true" :src="`https://badgen.net/github/open-prs/${repository.org}/${repository.name}/?cache=600&color=green`">
        <img lazy="true" :src="`https://badgen.net/github/prs/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/github/license/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/releases`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/github/release/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/commits/master`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/https/label.now.sh/github/unreleased/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://github.com/${repository.org}/${repository.name}/actions`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/github/checks/${repository.org}/${repository.name}/master?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://travis-ci.org/${repository.org}/${repository.name}`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/travis/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://travis-ci.org/${repository.org}/${repository.name}`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/packagist/php/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://travis-ci.org/${repository.org}/${repository.name}`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/packagist/dm/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
    <td>
      <a :href="`https://packagist.org/packages/${repository.org}/${repository.name}`" target="_blank">
        <img lazy="true" :src="`https://badgen.net/packagist/dt/${repository.org}/${repository.name}/?cache=600`">
      </a>
    </td>
  </tr>
</table>
