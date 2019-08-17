<template>
  <div class="blabs" v-if="posts.length">
    <div class="blab" v-for="post in posts">
      📆
      <router-link :to="post.path" class="blab-link">
        {{post.frontmatter.date|date}} - {{post.frontmatter.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { escape } from "./../utils/strings";

export default {
  props: ["slug"],
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`${this.slug}.*`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  },
  filters: {
    date(s) {
      return dayjs(s).format("DD/MM/YYYY");
    },
  }
};
</script>
