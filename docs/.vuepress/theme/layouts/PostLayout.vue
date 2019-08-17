<template>
  <div>
    <Layout>
      <template #page-bottom>
        <footer class="blab-footer">
          <hr />
          <div class="mt-3 d-flex flex-rows">
            <div class="text-left flex-grow-1">
              By <a :href="'https://github.com/' + post.frontmatter.author">@{{post.frontmatter.author}}</a>
            </div>
            <div class="text-right flex-grow-1">
              📆 {{post.frontmatter.date|date}}
            </div>
          </div>
        </footer>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@theme/layouts/Layout.vue";
import dayjs from "dayjs";

export default {
  components: {
    Layout
  },
  computed: {
    post() {
      return this.$page;
    }
  },
  filters: {
    date(s) {
      return dayjs(s).format("DD/MM/YYYY");
    },
  }
};
</script>
