<template>
  <div class="releases">
    <div v-for="(release, id) of releases" :key="id" class="col-md-6 col-lg-4">
      <div class="card mb-4 box-shadow">
        <div class="card-body">
          <h2>
            <router-link
              :to="release | link"
            >[{{release.tag}}] {{ release.org }} / {{release.repo}}</router-link>
            <small>{{release.created_at|date}}</small>
          </h2>
          <div v-html="md.render(release.body)"></div>
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
import { createMarkdown } from "./../utils/markdown";
import nl2br from "./../utils/nl2br";
import { link } from "./../utils/linker";

export default {
  data: () => ({
    releases: getFewReleases(10),
    md: createMarkdown()
  }),
  filters: {
    nl2br(s) {
      return nl2br(s);
    },
    date(s) {
      return dayjs(s).format("DD/MM/YYYY");
    },
    link(release) {
      const repo = findRepository({org: release.org, name: release.repo});
      return link(repo);
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
