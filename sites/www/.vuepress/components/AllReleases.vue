<template>
  <div>
    <div class="my-6">List of 20 latest releases.</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="(release, id) of releases" :key="id" class="bg-white shadow-lg border rounded-lg">
        <div class="text-lg px-4 py-2 bg-gray-100 rounded-t-lg flex flex-row">
          <div class="flex-1">
            <template v-if="$options.filters.link(release)">
              <router-link
                :to="release | link"
              >[{{release.tag}}] {{ release.org }} / {{release.repo}}</router-link>
            </template>
            <template v-else>[{{release.tag}}] {{ release.org }} / {{release.repo}}</template>
          </div>
          <span class="font-semibold">{{release.created_at|date}}</span>
        </div>
        <div
          class="release-notes p-4 bg-white rounded-b-lg"
          v-html="release.body || '😢 No release notes'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { findRepository } from "./../utils/data/repositories";
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
