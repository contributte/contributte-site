---
layout: HighLayout
metaTitle: Contributte Partners
---

<h1>Partners</h1>

<p>
  We are very thankful to our patrons for your incredible support. And also very proud 
  of companies and dev folks that trust us. 
</p>

<div class="mb-16"></div>

<h2>Patrons</h2>

<div class="md:flex flex-wrap my-12">
  <div v-for="partner of $page.contributte.partners.patrons">
    <a
      class="block max-w-sm rounded overflow-hidden shadow-lg px-6 m-2"
      :href="partner.website"
      :key="partner.name"
      target="_blank"
    >
      <div class="h-32 flex items-center justify-center">
         <img class="max-w-32 max-h-32" :src="partner.avatar" loading="lazy" :alt="partner.name" :title="partner.name" />
      </div>
      <div class="px-6 py-4 text-center">
        <div class="font-bold">{{partner.name}}</div>
      </div>
    </a>
  </div>
  <div>
     <a
      class="block max-w-sm rounded overflow-hidden shadow-lg m-2"
      href="https://github.com/contributte/contributte/issues/new?template=Patron.md"
      target="_blank"
    >
      <div class="mx-auto w-32 h-32 text-center text-6xl flex items-center justify-center">+</div> 
      <div class="px-6 py-4 text-center">$new</div>
    </a>
  </div>
</div>

<div>
  Please, consider to <a class="text-blue-600 underline" href="https://github.com/contributte/contributte/issues/new?template=Patron.md">support</a> contributte development.
</div>

<div class="mb-16"></div>

<h2>Trusted By</h2>

<div class="md:flex flex-wrap my-12">
  <div v-for="partner of $page.contributte.partners.trusted">
    <a
      class="block max-w-sm rounded overflow-hidden shadow-lg px-6 m-2"
      :href="partner.website"
      :key="partner.name"
      target="_blank"
    >
      <div class="h-32 flex items-center justify-center">
         <img class="max-w-32 max-h-32" :src="partner.avatar" loading="lazy" :alt="partner.name" :title="partner.name" />
      </div>
      <div class="px-6 py-4 text-center">
        <div class="font-bold">{{partner.name}}</div>
      </div>
    </a>
  </div>
  <div>
     <a
      class="block max-w-sm rounded overflow-hidden shadow-lg m-2"
      href="https://github.com/contributte/contributte/issues/new?template=Truster.md"
      target="_blank"
    >
      <div class="mx-auto w-32 h-32 text-center text-6xl flex items-center justify-center">+</div> 
      <div class="px-6 py-4 text-center">$new</div>
    </a>
  </div>
</div>

<div>
  Are you using contributte packages? Please <a class="text-blue-600 underline" href="https://github.com/contributte/contributte/issues/new?template=Truster.md">tell us</a> about it and we will put you in the <strong>trusted</strong> list.
</div>

<div class="mb-16"></div>

<h2>Reach Us</h2>

<ul class="my-8 list-disc list-inside">
  <li>Do you want to contribute to our ecosystem, or be a member?</li>
  <li>Do you miss some Nette component or integration?</li>
  <li>Are you looking for paid support?</li>
  <li>Do you need to skill your team?</li>
  <li>Don't hesitate to reach us. 🚀</li>
</ul>

<p><strong>We are here for you.</strong></p>

<p>
  Write us an email to <a class="underline" href="mailto:milan@sulc.dev">milan@sulc.dev</a> and we will surely figure something out.
</p>
