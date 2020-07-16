---
layout: HighLayout
metaTitle: About Contributte
---

<h1>About</h1>

<p>
  Contributte is a group of developers bound together that care about code quality.
</p>

<p>
  Take a look at our <a class="underline font-bold" href="/roadmap/vision.html">vision</a> or <a class="underline font-bold" href="/roadmap/recap.html">year recaps</a>.
</p>

<h2>Team</h2>

<p>
  We are group of opensource enthusiasts and together we are building huge ecosystem around <a href="https://nette.org">Nette Framework</a>.
</p>

<div class="flex justify-center flex-wrap my-12">
  <div v-for="member of $page.contributte.team">
    <a
      class="block max-w-sm rounded overflow-hidden shadow-lg m-2"
      :href="'https://github.com/'+member.username"
    >
      <img class="w-32 m-auto" :src="member.avatar+'&s=192'" loading="lazy" :alt="member.username" :title="member.username" />
      <div class="px-6 py-4 text-center">
        <div class="font-bold">{{member.username}}</div>
      </div>
    </a>
  </div>
  <div>
     <a
      class="block max-w-sm rounded overflow-hidden shadow-lg m-2"
      href="mailto:milan@sulc.dev?subject=New dev guy"
    >
      <div class="w-32 h-32 text-center text-6xl flex items-center justify-center">+</div> 
       <div class="px-6 py-4 text-center">
        <div class="font-bold">$you</div>
      </div>
    </a>
  </div>
</div>

<div class="md:flex">
  <div class="flex-1 my-12">
    <h2>Join Us</h2>
    <ul class="my-8 list-disc list-inside">
      <li>Do you want to be part of the team?</li>
      <li>Are you opensource enthusiast?</li>
      <li>Do you have some idea to discuss?</li>
    </ul>
    <p>
      <strong>We are looking for you.</strong>
    </p>
    <p>
      Write an email to <a class="underline" href="mailto:milan@sulc.dev?subject=Join to contributte">milan@sulc.dev</a> and we will surely figure out something.
    </p>
  </div>
  <div class="flex-1 my-12">
    <h2>Contact Us</h2>
    <ul class="my-8">
      <li><img src="https://avatars1.githubusercontent.com/u/538058?v=4&s=128" width="64" alt="" loading="lazy"></li>
      <li><strong>Milan Šulc</strong></li>
      <li><a class="underline" href="mailto:milan@sulc.dev">milan@sulc.dev</a></li>
    </ul>
  </div>
</div>
