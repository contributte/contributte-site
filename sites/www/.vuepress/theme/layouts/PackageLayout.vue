<template>
  <div>
    <Layout>
      <template #page-bottom>
        <Metadata />
      </template>
    </Layout>
  </div>
</template>

<script>
import Metadata from "./../components/Metadata.vue";
import Layout from "@theme/layouts/Layout.vue";

export default {
  components: {
    Metadata,
    Layout,
  },
};
</script>

