<table>
  <tr v-for="(repository) of $page.contributte.repositories">
    <td>{{ repository.org }} / {{ repository.name }}</td>
    <td><img :src="`https://badgen.net/github/stars/${repository.org}/${repository.name}/`"></td>
    <td><img :src="`https://badgen.net/github/issues/${repository.org}/${repository.name}/`"></td>
    <td><img :src="`https://badgen.net/github/release/${repository.org}/${repository.name}/`"></td>
    <td><img :src="`https://badgen.net/https/insigne.now.sh/github/commits-ahead/${repository.org}/${repository.name}/`"></td>
    <td><img :src="`https://badgen.net/packagist/php/${repository.org}/${repository.name}/`"></td>
    <td><img :src="`https://badgen.net/packagist/dm/${repository.org}/${repository.name}/`"></td>
    <td><img :src="`https://badgen.net/packagist/dt/${repository.org}/${repository.name}/`"></td>
    <td><img :src="`https://badgen.net/packagist/license/${repository.org}/${repository.name}/`"></td>
  </tr>
</table>
