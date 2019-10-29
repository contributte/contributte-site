<template>
  <div class="releases">
    <div v-for="(release, id) of releases" :key="id" class="release-body mb-6">
      <div class="text-xl">
        <span class="text-gray-600 font-semibold">{{release.created_at|date}}</span>
        <template v-if="$options.filters.link(release)">
          <router-link :to="release | link">[{{release.tag}}] {{ release.org }} / {{release.repo}}</router-link>
        </template>
        <template v-else>
          [{{release.tag}}] {{ release.org }} / {{release.repo}}
        </template>
      </div>
      <div class="release-notes p-4 bg-gray-100 rounded" v-html="release.body || '😢 No release notes'"></div>
    </div>
    <center>
      <a v-if="releases.length < 15" @click.prevent="onLoadAll" class="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded">Load more</a>
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
