<template>
  <div v-if="posts.length" class="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
    <div v-for="post in posts" :key="post.id">
      <div class="shadow-lg rounded-lg p-6">
        <div class="text-center md:text-left">
          <h2 class="text-lg">📆 {{ post.frontmatter.date | date }}</h2>
          <router-link :to="post.path" class="text-blue-600">{{ post.frontmatter.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slug"],
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter((x) => {
          return x.path.match(new RegExp(`${this.slug}.*`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    },
  },
};
</script>
