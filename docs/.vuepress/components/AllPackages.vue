<template>
  <div class="packages">
    <div class="row">
      <div v-for="(repository) of repositories" :key="repository.name" class="col-md-6 col-lg-4">
        <div class="card mb-4 box-shadow">
          <div class="card-body">
            <h2>
              <a :href="'/packages/'+repository.org+'/'+repository.name+'.html'">{{ repository.name }}</a>
            </h2>
            <div v-if="repository.description">
              <div v-html="md.render(repository.description)"></div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a :href="'/packages/'+repository.org+'/'+repository.name+'.html'" class="btn btn-xs btn-success">Docs</a>
                <a :href="'https://github.com/'+repository.org+'/'+repository.name" class="btn btn-xs btn-warning">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEnabledRepositories } from "./../utils/repositories";
import { createMarkdown } from "./../utils/markdown";

export default {
  data: () => ({
    repositories: getEnabledRepositories(),
    md: createMarkdown()
  })
};
</script>

<style lang="scss">
.packages {
  .card {
    h2 {
      font-size: 140%;
    }
  }
}
</style>
