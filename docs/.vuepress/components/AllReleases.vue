<template>
  <div class="releases">
    <div v-for="(release, id) of releases" :key="id" class="release-body mb-6">
      <h2>
        <template v-if="$options.filters.link(release)">
          <router-link :to="release | link">[{{release.tag}}] {{ release.org }} / {{release.repo}}</router-link>
        </template>
        <template v-else>
          [{{release.tag}}] {{ release.org }} / {{release.repo}}
        </template>
        <small>{{release.created_at|date}}</small>
      </h2>
      <div class="release-notes" v-html="release.body"></div>
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
