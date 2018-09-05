<template>
  <div class="releases">
    <div class="row">
      <div v-for="(release, id) of releases" :key="id" class="col-md-6 col-lg-4">
        <div class="card mb-4 box-shadow">
          <div class="card-body">
            <h2>
              <router-link :to="'/packages/'+release.org+'/'+release.repo+'.html'">
                {{release.repo}} / {{release.tag}}
              </router-link>
              <small>{{release.created_at|date}}</small>
            </h2>
            <div v-html="md.render(release.body)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getReleases } from "./../utils/releases";
import { createMarkdown } from "./../utils/markdown";
import nl2br from "./../utils/nl2br";
import dayjs from "dayjs";

export default {
  data: () => ({
    releases: getReleases(),
    md: createMarkdown()
  }),
  filters: {
    nl2br(s) {
      return nl2br(s);
    },
    date(s) {
      return dayjs(s).format("DD/MM/YYYY");
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
