<template>
  <div id="global-layout">
    <component :is="layout" :class="'layout-'+layout.toLowerCase()"/>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    }
  },
  mounted() {
    import("./../../utils/sw").then(() => {
      console.log('ℹ️ ServiceWorker utils loading');
    })
  }
};
</script>
