<template>
  <div class="packages">
    <div class="row">
      <div v-for="(repository) of repositories" :key="repository.name" class="col-md-6 col-lg-4">
        <div class="card mb-4 box-shadow">
          <div class="card-body">
            <h2>
              <a :href="'/packages/' + repository.name + '.html'">{{ repository.name }}</a>
            </h2>
            <div v-if="repository.description" v-html="repository.description"/>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a :href="'/packages/' + repository.name + '.html'" class="btn btn-sm btn-outline-secondary">Docs</a>
                <a :href="'https://github.com/contributte/'+repository.name" class="btn btn-sm btn-outline-secondary">Github</a>
              </div>
              <!--<small class="text-muted">v0.2</small>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getEnabledRepositories} from "./../utils/repositories";

  export default {
    data: () => ({
      repositories: getEnabledRepositories()
    })
  }
</script>

<style lang="scss">
  .packages {
    .card {
      h2 {
        font-size: 130%;
      }
    }
  }
</style>
