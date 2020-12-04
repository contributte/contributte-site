<template>
  <div :title="`Total: ${total} | Monthly: ${monthly} | Daily: ${daily}`">{{ count }}</div>
</template>
<script>
import { numerize } from "./../utils/strings";

export default {
  props: {
    mode: {
      type: String,
      required: true,
      default: "total",
    },
  },
  data: () => ({
    total: null,
    monthly: null,
    daily: null,
  }),
  computed: {
    count() {
      if (this.mode === "daily") return numerize(this.daily, 2);
      return numerize(this.total, 2);
    },
  },
  async created() {
    const res = await fetch("https://packagist.now.sh/stats/contributte+apitte+nettrine+ninjify");
    const data = await res.json();

    this.total = data.downloads.total;
    this.monthly = data.downloads.monthly;
    this.daily = data.downloads.daily;
  },
};
</script>
