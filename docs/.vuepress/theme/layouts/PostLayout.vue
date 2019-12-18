<template>
  <Layout>
    <template #page-bottom>
      <footer class="m-auto">
        <hr />
        <div class="mt-3 flex">
          <div class="text-left flex-1">
            By
            <a
              :href="'https://github.com/' + post.frontmatter.author"
            >@{{post.frontmatter.author}}</a>
          </div>
          <div class="text-right flex-1">📆 {{post.frontmatter.date|date}}</div>
        </div>
      </footer>
    </template>
  </Layout>
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
    }
  }
};
</script>
