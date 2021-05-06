<template>
  <div>
    <Layout />
    <Footer />
  </div>
</template>

<script>
import Footer from "./../components/Footer.vue";
import Layout from "@theme/layouts/Layout.vue";

export default {
  components: {
    Footer,
    Layout,
  },
};
</script>
