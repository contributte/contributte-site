---
layout: HeroLayout
metaTitle: Contributte - First class extensions, addons and plugins for Nette Framework. Plenty of examples and tricks for Nette.
---

<div class="pt-12 sm:pt-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h1>
        <img src="https://avatars.githubusercontent.com/contributte" class="m-auto" alt="Contributte" title="Contributte logo" width="200" loading="lazy">
      </h1>
      <h2 class="mt-5 text-5xl font-extrabold text-gray-900 sm:text-5xl">
        Contributte
      </h2>
      <p class="mt-5 text-2xl text-gray-500 sm:mt-4">
        First::class <a href="/packages/" class="font-black underline">extensions</a> for Nette Framework
      </p>
    </div>
  </div>
  <div class="mt-10 pb-12 bg-white sm:pb-16">
    <div class="relative">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
            <a href="/packages/" class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Packages
              </dt>
              <dd class="order-1 text-5xl font-extrabold text-blue-700">
                {{ $themeConfig.contributte.packages }}
              </dd>
            </a>
            <a href="/packages/" class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Downloads (daily)
              </dt>
              <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                <Downloads mode="daily"/>
              </dd>
            </a>
            <a href="/packages/" class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Downloads (total)
              </dt>
              <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                <Downloads mode="total"/>
              </dd>
            </a>
            <a href="/about.html" class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Members
              </dt>
              <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                {{ $themeConfig.contributte.team }}
              </dd>
            </a>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>

<section>
  <div class="container max-w-full mx-auto py-24">
    <h2 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
      Partners
    </h2>
    <p class="text-center text-xl text-gray-500 mt-2 px-6">
      Awesome collection of our beloved partners. Thank you.
    </p>
    <div class="h-1 mx-auto bg-blue-600 w-24 opacity-75 mt-4 rounded"></div>
    <div class="flex flex-col md:flex-row my-12 justify-center items-center">
        <div v-for="patron of $page.contributte.patrons" class="flex w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/6 justify-center">
            <a
            class="block w-full max-w-sm rounded overflow-hidden shadow-lg px-6 m-2"
            :href="patron.website"
            :key="patron.name"
            target="_blank"
            >
            <div class="h-32 flex items-center justify-center">
                <img class="max-w-32 max-h-32" :src="patron.avatar" loading="lazy" :alt="patron.name" :title="patron.name" />
            </div>
            <div class="py-4 text-center">
                <div class="font-bold">{{patron.name}}</div>
            </div>
        </a>
        </div>
    </div>
    <p class="text-center text-sm text-gray-500 mt-2 px-6">
      Do you want to be part of this group? <a href="/partners.html">Unlock the power.</a>
    </p>
  </div>
</section>

<section>
  <div class="container max-w-full mx-auto py-24">
    <h2 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
      Key Features
    </h2>
    <p class="text-center text-xl text-gray-500 mt-2 px-6">
      Contributte is a group of developers bound together that care about code quality.
    </p>
    <div class="h-1 mx-auto bg-blue-600 w-24 opacity-75 mt-4 rounded"></div>
    <div class="mt-12 flex flex-wrap">
      <div class="md:w-1/3 sm:w-100 px-4 pb-6">
        <h2 class="text-2xl font-medium">Up to date</h2>
        <p>We follow latest principles and support latest version of Nette.</p>
      </div>
      <div class="md:w-1/3 sm:w-100 px-4 pb-6">
        <h2 class="text-2xl font-medium">Consistent</h2>
        <p>We are focusing on consitency across all packages from Contributte, <a class="underline" href="/apitte/">Apitte</a>, <a class="underline" href="/nettrine/">Nettrine</a> & <a class="underline" href="/ninjify/">Ninjify</a>.</p>
      </div>
      <div class="md:w-1/3 sm:w-100 px-4 pb-6">
        <h2 class="text-2xl font-medium">Community</h2>
        <p>This is not one-man-show project. Together, we are building better ecosystem around Nette.</p>
      </div>
      <div class="md:w-1/3 sm:w-100 px-4 pb-6">
        <h2 class="text-2xl font-medium">API</h2>
        <p>We provide full-featured API platform framework <a class="underline" href="/apitte/">Apitte</a>. PSR-7 & middlewares included.</p>
      </div>
      <div class="md:w-1/3 sm:w-100 px-4 pb-6">
        <h2 class="text-2xl font-medium">Doctrine</h2>
        <p>Doctrine is well-known ORM booster your projects. Pwned it with <a class="underline" href="/nettrine/">Nettrine</a> and release your project sooner.</p>
      </div>
      <div class="md:w-1/3 sm:w-100 px-4 pb-6">
        <h2 class="text-2xl font-medium">Quality Assurance</h2>
        <p>We're focusing on best practices and coding standard. <a class="underline" href="/ninjify/">Ninjify</a> packages are helping us to get it done. </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container max-w-full mx-auto py-24">
    <h2 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
      Project Templates
    </h2>
    <p class="text-center text-lg text-gray-700 mt-2 px-6">
      Cut <strong>initialization phase</strong> of your new project with prepare project templates.
    </p>
    <div class="h-1 mx-auto bg-blue-600 w-24 opacity-75 mt-4 rounded"></div>
    <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
      <div class="relative block flex flex-col md:flex-row items-center">
        <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
          <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
            <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
              <h3 class="text-lg font-medium p-3 pb-0 text-center tracking-wide">
                Apitte Skeleton
              </h3>
              <p class="text-center pt-2 pb-6">API-based project skeleton.</p>
            </div>
            <div class="flex flex-wrap mt-3 px-6">
              <ul>
                <li class="flex items-center">
                  <div class=" rounded-full p-2 fill-current text-green-700">
                    <svg-circle />
                  </div>
                  <span class="text-gray-700 text-lg ml-3">Nette 3.1</span>
                </li>
                <li class="flex items-center">
                  <div class=" rounded-full p-2 fill-current text-green-700">
                    <svg-circle />
                  </div>
                  <span class="text-gray-700 text-lg ml-3">Contributte</span>
                </li>
                <li class="flex items-center">
                  <div class=" rounded-full p-2 fill-current text-green-700">
                    <svg-circle />
                  </div>
                  <span class="text-gray-700 text-lg ml-3">Apitte</span>
                </li>
                <li class="flex items-center">
                  <div class=" rounded-full p-2 fill-current text-green-700">
                    <svg-circle />
                  </div>
                  <span class="text-gray-700 text-lg ml-3">QA</span>
                </li>
              </ul>
            </div>
            <div class="block flex items-center p-8  uppercase">
              <a href="https://github.com/contributte/apitte-skeleton" class="mt-3 text-lg text-center font-semibold bg-blue-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-blue-700">
                Browse
              </a>
            </div>
          </div>
        </div>
        <div class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
          <div class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
            Awesome!
          </div>
          <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
            <h3 class="text-lg font-medium p-3 pb-0 text-center tracking-wide">
              Webapp Skeleton
            </h3>
            <p class="text-center pt-2 pb-6">Mixed project skeleton.</p>
          </div>
          <div class="flex pl-12 justify-start sm:justify-start mt-3">
            <ul>
              <li class="flex items-center">
                <div class=" rounded-full p-2 fill-current text-green-700">
                  <svg-circle />
                </div>
                <span class="text-gray-700 text-lg ml-3">Nette 3.1</span>
              </li>
              <li class="flex items-center">
                <div class=" rounded-full p-2 fill-current text-green-700">
                  <svg-circle />
                </div>
                <span class="text-gray-700 text-lg ml-3">Contributte</span>
              </li>
              <li class="flex items-center">
                <div class=" rounded-full p-2 fill-current text-green-700">
                  <svg-circle />
                </div>
                <span class="text-gray-700 text-lg ml-3">Nettrine</span>
              </li>
              <li class="flex items-center">
                <div class=" rounded-full p-2 fill-current text-green-700">
                  <svg-circle />
                </div>
                <span class="text-gray-700 text-lg ml-3">QA</span>
              </li>
            </ul>
          </div>
          <div class="block flex items-center p-8  uppercase">
            <a href="https://github.com/contributte/webapp-skeleton" class="mt-3 text-lg text-center font-semibold bg-blue-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-blue-700">
              Browse
            </a>
          </div>
        </div>
        <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
          <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
            <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
              <h3 class="text-lg font-medium p-3 pb-0 text-center tracking-wide">
                Console Skeleton
              </h3>
              <p class="text-center pt-2 pb-6">CLI-based project skeleton.</p>
            </div>
            <div class="flex flex-wrap mt-3 px-6">
              <ul>
                <li class="flex items-center">
                  <div class=" rounded-full p-2 fill-current text-green-700">
                    <svg-circle/>
                  </div>
                  <span class="text-gray-700 text-lg ml-3">Nette 3.1</span>
                </li>
                <li class="flex items-center">
                  <div class=" rounded-full p-2 fill-current text-green-700">
                    <svg-circle/>
                  </div>
                  <span class="text-gray-700 text-lg ml-3">Contributte</span>
                </li>
                <li class="flex items-center">
                  <div class=" rounded-full p-2 fill-current text-green-700">
                    <svg-circle />
                  </div>
                  <span class="text-gray-700 text-lg ml-3">QA</span>
                </li>
              </ul>
            </div>
            <div class="block flex items-center p-8  uppercase">
              <a href="https://github.com/contributte/console-skeleton" class="mt-3 text-lg text-center font-semibold bg-blue-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-blue-700">
                Browse
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container max-w-full mx-auto py-24">
    <h2 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
      Development
    </h2>
    <p class="text-center text-lg text-gray-700 mt-2 px-6">
      We have build a stable awesome community-driven platform and we need your help.
    </p>
    <div class="h-1 mx-auto bg-blue-600 w-24 opacity-75 mt-4 rounded"></div>
    <div class="flex my-12 justify-center">
      <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-2">
        <div class="sm:flex sm:items-center px-6 py-4">
          <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16" src="https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-160/1f468-1f3fb-200d-1f4bb.png" loading="lazy" />
          <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p class="text-xl font-bold leading-tight">We want you for team!</p>
            <div class="mt-4">
              <a href="/about.html" class="text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Join Us</a>
              <a href="/about.html" class="text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Right</a>
              <a href="/about.html" class="text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-2">
        <div class="sm:flex sm:items-center px-6 py-4">
          <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16" src="https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-160/1f468-1f3fb-200d-1f4bc.png" loading="lazy" />
          <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p class="text-xl font-bold leading-tight">We need you to support!</p>
            <div class="mt-4">
              <a href="/partners.html" class="text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Support Us</a>
              <a href="/partners.html" class="text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">With</a>
              <a href="/partners.html" class="text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">$$$</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
