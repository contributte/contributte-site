<template>
  <div>
    <div class="text-center text-3xl text-gray-700 mb-4">
      Search in
      <strong>{{ total }}</strong> awesome packages!
    </div>
    <div class="m-auto w-9/12 flex mb-6">
      <input
        class="w-full bg-white border border-gray-300 focus:outline-none focus:border-gray-600 rounded-lg py-2 px-4 block appearance-none leading-normal"
        type="text"
        placeholder="datagrid"
        v-model="searching"
      />
    </div>
    <div v-if="filtered.length <= 0" class="text-center">No package found.</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="(repository) of filtered" class="bg-white shadow-lg border rounded-lg p-4">
        <div class="flex flex-row items-center mb-4">
          <a class="flex-1 text-xl truncate" :href="repository | link">
            {{ repository.name }}
            <span class="text-sm text-gray-600">{{ repository.org }}</span>
          </a>
          <a
            class="text-lg text-right"
            v-if="repository.releases && repository.releases.last"
            :href="'https://packagist.org/packages/'+repository.org+'/'+repository.name"
          >
            <span class="text-sm">{{ repository.stars }} ⭐</span>
            / {{repository.releases.last.tag}}
          </a>
        </div>
        <div v-html="md.render(repository.description)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash-es";
import { getEnabledRepositories } from "./../utils/repositories";
import { createMarkdown } from "./../utils/markdown";
import { link } from "./../utils/linker";

export default {
  data: () => ({
    repositories: _.sortBy(getEnabledRepositories(), "stars").reverse(),
    md: createMarkdown(),
    search: ""
  }),
  computed: {
    total() {
      return this.repositories.length;
    },
    filtered() {
      return _(getEnabledRepositories())
        .filter(r => {
          if (this.search.length <= 0) return true;
          return (
            r.description.includes(this.search) ||
            r.name.includes(this.search) ||
            r.org.includes(this.search)
          );
        })
        .sortBy("stars")
        .reverse()
        .value();
    },
    searching: {
      get() {
        return this.search;
      },
      set: _.debounce(function(newValue) {
        this.search = newValue;
      }, 300)
    }
  },
  filters: {
    link
  }
};
</script>
