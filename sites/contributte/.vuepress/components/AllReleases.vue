<template>
  <div>
    <div class="my-6">List of 20 latest releases.</div>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(release, id) of releases" :key="id" class="mb-6">
        <div class="text-xl">
          <span class="text-gray-600 font-semibold">{{release.created_at|date}}</span>
          <template v-if="$options.filters.link(release)">
            <router-link :to="release | link">[{{release.tag}}] {{ release.org }} / {{release.repo}}</router-link>
          </template>
          <template v-else>[{{release.tag}}] {{ release.org }} / {{release.repo}}</template>
        </div>
        <div
          class="release-notes p-4 bg-gray-100 rounded"
          v-html="release.body || '😢 No release notes'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { findRepository } from "./../utils/repositories";
import { link } from "./../utils/linker";

export default {
  computed: {
    releases() {
      return this.$page.contributte.releases;
    }
  },
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
  }
};
</script>
