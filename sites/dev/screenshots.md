---
pageClass: status
---

<div class="grid grid-cols-4 gap-4">
  <div v-for="(repository) of $page.contributte.repositories" :key="`${repository.org}/${repository.name}`" class="border border-gray-300 shadow">
    <a :href="`https://github.com/${repository.org}/${repository.name}`" class="block" target="_blank">
      <div class="text-center px-4 py-2 bg-gray-200">
        {{ repository.org }} / {{ repository.name }}
      </div>
      <img class="object-fill w-full" lazy="true" :src="`https://githubber.vercel.app/repos/${repository.org}/${repository.name}/readme/screenshot`">
    </a>
  </div>
</div>
