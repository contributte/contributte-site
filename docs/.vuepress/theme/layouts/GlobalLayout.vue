<template>
  <div id="global-layout">
    <component :is="layout"/>
    <xfooter/>
  </div>
</template>

<script>
import Footer from "./../components/Footer.vue";

export default {
  components: {
    xfooter: Footer
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    }
  }
};
</script>
