<template>
  <table class="table-packages">
    <tr>
      <td>Name</td>
      <td>Version</td>
      <td>Description</td>
    </tr>
    <tr v-for="(repository) of repositories" :key="repository.org + '-' + repository.name">
      <td>
        <a
          :href="'/packages/'+repository.org+'/'+repository.name+'.html'"
        >{{ repository.org }} / {{ repository.name }}</a>
      </td>
      <td>
        <a
          v-if="repository.releases && repository.releases.last"
          :href="'https://packagist.org/packages/'+repository.org+'/'+repository.name"
        >{{repository.releases.last.tag}}</a>
      </td>
      <td v-html="md.render(repository.description)"></td>
    </tr>
  </table>
</template>

<script>
import { getEnabledRepositories } from "./../utils/repositories";
import { createMarkdown } from "./../utils/markdown";

export default {
  data: () => ({
    repositories: getEnabledRepositories(),
    md: createMarkdown()
  })
};
</script>

<style lang="scss">
.table-packages {
  tr {
    td:nth-child(1) {
      white-space: nowrap;
    }
    td > p {
      margin: 0;
    }
  }
}
</style>
