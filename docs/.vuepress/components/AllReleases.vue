<template>
  <div class="releases">
    <div v-for="(release, id) of releases" :key="id" class="col-md-6 col-lg-4">
      <div class="card mb-4 box-shadow">
        <div class="card-body">
          <h2>
            <template v-if="$options.filters.link(release)">
              <router-link :to="release | link">[{{release.tag}}] {{ release.org }} / {{release.repo}}</router-link>
            </template>
            <template v-else>
              [{{release.tag}}] {{ release.org }} / {{release.repo}}
            </template>
            <small>{{release.created_at|date}}</small>
          </h2>
          <div v-html="release.body"></div>
        </div>
      </div>
    </div>
    <center>
      <a v-if="releases.length < 15" @click.prevent="onLoadAll" class="action-button">Load all</a>
    </center>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { getReleases, getFewReleases } from "./../utils/releases";
import { findRepository } from "./../utils/repositories";
import { link } from "./../utils/linker";

export default {
  data: () => ({
    releases: getFewReleases(10)
  }),
  filters: {
    date(s) {
      return dayjs(s).format("DD/MM/YYYY");
    },
    link(release) {
      const repo = findRepository({ org: release.org, name: release.repo });
      if (!repo) {
        console.error(`Undefined repository ${release.org}/${release.repo}`);
      } else {
        return link(repo);
      }
    }
  },
  methods: {
    onLoadAll() {
      this.releases = getReleases();
    }
  }
};
</script>

<style lang="scss">
.releases {
  .card {
    h2 {
      font-size: 140%;

      small {
        font-size: 0.7em;
        margin-left: 10px;
        color: #888888;
      }
    }
  }
}
</style>
