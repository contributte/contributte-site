---
layout: HighLayout
metaTitle: About Contributte
---

<div class="max-w-7xl mx-auto pt-8 pb-20 px-4 sm:px-6">
  <div class="text-center">
    <h1 class="text-3xl tracking-tight font-extrabold sm:text-4xl">
      About
    </h1>
    <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
      Contributte is a group of developers bound together that care about code quality.
      Take a look at our <a class="underline font-bold" href="/roadmap/">roadmap</a> or <a class="underline font-bold" href="/roadmap/changelog.html">changelog</a>.
    </p>
  </div>
</div>

<div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
  <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
    <div class="space-y-5 sm:space-y-4">
      <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our founder</h2>
      <p class="text-xl text-gray-500">
        <strong>Milan Šulc</strong>, <i>a.k.a Felix</i>, founded this organization in 2016. To provide better and stable ecosystem around <a href="https://nette.org">Nette</a>.
      </p>
    </div>
    <div>
      <div class="flex items-center space-x-4 lg:space-x-6">
        <img class="w-32 h-32 rounded-full lg:w-32 lg:h-32" src="https://avatars1.githubusercontent.com/u/538058?v=4&s=192" alt="">
        <div class="font-medium text-lg leading-6 space-y-1">
          <h3>Milan Šulc</h3>
          <p class="text-indigo-600">Founder</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
  <div class="space-y-8 sm:space-y-12">
    <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
      <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">The Team</h2>
      <p class="text-xl text-gray-500">We are group of opensource enthusiasts and together we are setting unique footprint in PHP world.</p>
    </div>
    <ul class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
      <li v-for="member of $page.contributte.team">
        <div class="space-y-4">
          <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="member.avatar+'&s=192'" loading="lazy" :alt="member.username" :title="member.username">
          <div class="space-y-2">
            <div class="text-xs font-medium lg:text-sm">
              <h3>{{member.username}}</h3>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="space-y-4">
          <div class="space-y-2">
            <a href="mailto:milan@sulc.dev?subject=New dev guy" class="text-xs font-medium lg:text-sm">
              <div class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 bg-gray-200"></div>
              <h3>$you</h3>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>


<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
  <div class="lg:grid lg:grid-cols-12 lg:gap-8">
    <div class="md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
      <h4>
        <span class="mt-1 flex space-x-2 text-2xl tracking-tight font-extrabold sm:text-3xl xl:text-4xl">
          <span class="block text-gray-900">Looking for</span> <span class="block text-indigo-600">new developers</span>
        </span>
      </h4>
      <ul class="my-8 list-disc list-inside">
        <li>Do you want to be part of the team?</li>
        <li>Are you opensource enthusiast?</li>
        <li>Do you have some idea to discuss?</li>
      </ul>
      <p class="mt-3 text-base text-gray-500">
        Write an email to <a class="underline" href="mailto:milan@sulc.dev?subject=Join to contributte">milan@sulc.dev</a>.
      </p>
      <p class="text-base text-gray-500">
        We will surely figure out something.
      </p>
    </div>
    <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
      <img class="w-full" src="https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80" alt="">
    </div>
  </div>
</div>

<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
  <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
    <span class="block">Ready to dive in?</span>
    <span class="block text-blue-700">Get in touch with us.</span>
  </h2>
  <div class="mt-8 lex lg:mt-0 lg:flex-shrink-0">
    <div class="inline-flex rounded-md shadow">
      <a href="mailto:milan@sulc.dev" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600">
        Contact
      </a>
    </div>
    <div class="ml-3 inline-flex rounded-md shadow">
      <a href="/packages.html" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-blue-100">
        Learn more
      </a>
    </div>
  </div>
</div>
