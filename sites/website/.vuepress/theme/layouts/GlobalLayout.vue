<template>
  <div id="global-layout">
    <component :is="layout" :class="'layout-'+layout.toLowerCase()" class="layout min-h-screen"/>
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
  }
};
</script>
