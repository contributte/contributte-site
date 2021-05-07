<template>
  <div>
    <div>
      <div class="text-center text-3xl text-gray-700 mb-4">
        Search in
        <strong>{{ total }}</strong> awesome packages!
      </div>
      <div class="m-auto md:w-9/12 flex mb-6">
        <input class="w-full bg-white border border-gray-300 focus:outline-none focus:border-gray-600 rounded-lg py-2 px-4 block appearance-none leading-normal" type="text" placeholder="datagrid" v-model="searching" />
      </div>
    </div>
    <div>
      <div class="m-auto flex flex-wrap justify-center flex mb-6 pt-2">
        <div @click="toggleCatagory('nette')" :class="[category === 'nette' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">nette</div>
        <div @click="toggleCatagory('ui')" :class="[category === 'ui' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">UI</div>
        <div @click="toggleCatagory('forms')" :class="[category === 'forms' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">forms</div>
        <div @click="toggleCatagory('api')" :class="[category === 'api' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">API</div>
        <div @click="toggleCatagory('symfony')" :class="[category === 'symfony' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">symfony</div>
        <div @click="toggleCatagory('doctrine')" :class="[category === 'doctrine' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">doctrine</div>
        <div @click="toggleCatagory('psr')" :class="[category === 'psr' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">PSR</div>
        <div @click="toggleCatagory('nextras')" :class="[category === 'nextras' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">nextras</div>
        <div @click="toggleCatagory('webservices')" :class="[category === 'webservices' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">webservices</div>
        <div @click="toggleCatagory('dev')" :class="[category === 'dev' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">dev</div>
        <div @click="toggleCatagory('skeleton')" :class="[category === 'skeleton' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">skeleton</div>
        <div @click="toggleCatagory('project')" :class="[category === 'project' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">project</div>
        <div @click="toggleCatagory('other')" :class="[category === 'other' ? 'bg-blue-600 text-white' : '']" class="bg-gray-200 cursor-pointer rounded-lg px-2 py-1 font-bold mx-2 mb-2">other</div>
      </div>
      <div v-if="filtered.length <= 0" class="text-center">No package found.</div>
      <div class="grid grid-cols-1 gap-4">
        <div v-for="(repository, index) of filtered" :key="repository.name + index" class="bg-white shadow-lg border rounded-lg px-4 py-2">
          <div class="flex flex-row items-center">
            <div class="flex-1">
              <a class="text-xl" :href="repository | link">{{ repository.name }}</a>
              <span class="text-sm text-gray-600">{{ repository.org }}</span>
            </div>
            <a class="text-lg text-right" :href="'https://packagist.org/packages/' + repository.org + '/' + repository.name">
              <span class="text-sm">{{ repository.stars }} ⭐</span>
              <span v-if="repository.releases && repository.releases.last">/ {{ repository.releases.last.tag }}</span>
            </a>
          </div>
          <div class="break-words mt-2" v-html="md.render(repository.description)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash-es";
import { createMarkdown } from "./../utils/markdown";

export default {
  data: () => ({
    md: createMarkdown(),
    search: "",
    category: null,
  }),
  computed: {
    total() {
      return this.repositories.length;
    },
    repositories() {
      return _.sortBy(this.$page.contributte.repositories, "stars").reverse();
    },
    filtered() {
      return _(this.$page.contributte.repositories)
        .filter((r) => {
          if (this.search.length <= 0) return true;
          return r.description.includes(this.search) || r.name.includes(this.search) || r.org.includes(this.search);
        })
        .filter((r) => {
          if (this.category === null) return true;

          return r.category === this.category;
        })
        .sortBy("stars")
        .reverse()
        .value();
    },
    searching: {
      get() {
        return this.search;
      },
      set: _.debounce(function (newValue) {
        this.search = newValue;
      }, 300),
    },
  },
  methods: {
    toggleCatagory(category) {
      if (this.category === category) {
        this.category = null;
      } else {
        this.category = category;
      }
    },
  },
};
</script>
