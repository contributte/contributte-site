<template>
  <div class="explanation relative border-1 rounded" :class="cls.wrapper">
    <div class="m-1 rounded px-5 py-3 md:flex" :class="cls.inner">
      <div class="flex-1">
        <slot name="default"></slot>
      </div>
      <div class="xs:mt-4 sm:mt-0">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
  },
  computed: {
    cls() {
      if (this.type === "package") {
        return {
          wrapper: "border-blue-600 explanation--package",
          inner: "bg-blue-500 text-white",
        };
      }

      if (this.type === "hotness") {
        return {
          wrapper: "border-red-500 explanation--hotness",
          inner: "bg-red-100 text-gray-800",
        };
      }

      return {
        wrapper: "border-gray-500",
        inner: "bg-gray-100 text-gray-800",
      };
    },
  },
};
</script>
