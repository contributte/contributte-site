<template>
  <div>
    <Layout>
      <template #page-bottom>
        <footer class="xcontainer px-8">
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
    <Footer />
  </div>
</template>

<script>
import Footer from "./../components/Footer.vue";
import Layout from "@theme/layouts/Layout.vue";

export default {
  components: {
    Footer,
    Layout
  },
  computed: {
    post() {
      return this.$page;
    }
  }
};
</script>
