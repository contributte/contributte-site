<template>
  <footer class="footer mx-auto px-8">
    <div class="rounded border border-gray-400 bg-gray-100 p-4">
      <div class="md:flex justify-between">
        <div>
          <a :href="editLink" target="_blank" rel="noopener noreferrer">Edit this page on Github!</a>
          <OutboundLink />
        </div>
        <div>
          Last update
          <strong>{{ lastUpdate }}</strong>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "Metadata",

  computed: {
    editLink() {
      const git = this.$frontmatter.git;
      return `https://github.com/${git.org}/${git.name}/tree/master/.docs/`;
    },
    lastUpdate() {
      return dayjs(this.$frontmatter.git.updated).format("DD.MM.YYYY / HH:mm");
    },
  },
};
</script>
