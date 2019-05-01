<template>
  <div>
    <p>
      Awesome
      <strong>{{ total }}</strong> packages!
    </p>
    <table class="table-packages">
      <tr>
        <td>Name</td>
        <td>Stats</td>
        <td>Version</td>
        <td>Description</td>
      </tr>
      <tr v-for="(repository) of repositories" :key="repository.org + '-' + repository.name">
        <td>
          <a
            :href="'/packages/'+repository.org+'/'+repository.name+'.html'"
          >{{ repository.org }} / {{ repository.name }}</a>
        </td>
        <td>{{ repository.stars }} ⭐</td>
        <td>
          <a
            v-if="repository.releases && repository.releases.last"
            :href="'https://packagist.org/packages/'+repository.org+'/'+repository.name"
          >{{repository.releases.last.tag}}</a>
        </td>
        <td v-html="md.render(repository.description)"></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getEnabledRepositories } from "./../utils/repositories";
import { createMarkdown } from "./../utils/markdown";
import { sortBy } from "lodash-es";

export default {
  data: () => ({
    repositories: sortBy(getEnabledRepositories(), "stars").reverse(),
    md: createMarkdown()
  }),
  computed: {
    total() {
      return this.repositories.length;
    }
  }
};
</script>

<style lang="scss">
.table-packages {
  tr {
    td:nth-child(1),
    td:nth-child(2),
    td:nth-child(3) {
      white-space: nowrap;
    }
    td > p {
      margin: 0;
    }
  }
}
</style>
