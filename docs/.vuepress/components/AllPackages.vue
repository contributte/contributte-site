<template>
  <div>
    <p>
      Awesome
      <strong>{{ total }}</strong> packages!
    </p>
    <table class="table-packages">
      <tr>
        <td>Package</td>
        <td>Latest</td>
        <td>Stats</td>
        <td>Nette</td>
        <td>PHP</td>
      </tr>
      <template v-for="(repository) of repositories">
        <tr>
          <td class="name" rowspan="2">
            <a
              :href="'/packages/'+repository.org+'/'+repository.name+'.html'"
            >{{ repository.name }} <br> <small>{{ repository.org }}</small></a>
          </td>
          <td>
            <a
              v-if="repository.releases && repository.releases.last"
              :href="'https://packagist.org/packages/'+repository.org+'/'+repository.name"
            >{{repository.releases.last.tag}}</a>
          </td>
          <td>⭐ {{ repository.stars }}</td>
          <td>
            <template v-if="repository.composer && repository.composer.nette">
              <span
                v-for="version in repository.composer.nette"
                :key="repository.name + '-nette-'+version"
                :class="'badge--nette--'+version.replace(/\./g,'')"
                class="badge badge--nette"
              >{{version}}</span>
            </template>
          </td>
          <td>
            <span
              v-if="repository.composer && repository.composer.php"
              class="badge badge--php"
            >{{ repository.composer.php[0] }}-{{ repository.composer.php[1] }}</span>
          </td>
        </tr>
        <tr>
          <td colspan="4" v-html="md.render(repository.description)"></td>
        </tr>
      </template>
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
    td.name {
      white-space: nowrap;
    }
    td > p {
      margin: 0;
    }
  }
  span {
    margin: 0 1px;
  }
}
</style>
