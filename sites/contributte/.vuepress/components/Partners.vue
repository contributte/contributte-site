<template>
  <div class="flex justify-center flex-wrap my-12">
    <div v-for="partner of $page.contributte.partners">
      <a
        class="block max-w-sm rounded overflow-hidden shadow-lg px-6 m-2"
        :href="partner.website"
      >
        <img class="w-32 m-auto" :src="partner.avatar" loading="lazy" alt="Sunset in the mountains" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold">{{partner.name}}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>
