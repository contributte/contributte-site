<template>
  <div class="flex justify-center flex-wrap my-12">
    <div v-for="member of team">
      <a
        class="block max-w-sm rounded overflow-hidden shadow-lg m-2"
        :href="'https://github.com/'+member.username"
      >
        <img class="w-32 m-auto" :src="member.avatar" alt="Sunset in the mountains" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold">{{member.username}}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import team from "../../../data/team";

export default {
  data: () => ({
    team
  })
};
</script>

<style lang="scss">
</style>
