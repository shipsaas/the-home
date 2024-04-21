<template>
  <div class="relative isolate overflow-hidden bg-white">
    <svg
      class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
      />
    </svg>
    <div
      class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20"
    >
      <div
        class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
      >
        <img
          class="h-11"
          src="@/assets/images/shipsaas-logo.png"
          alt="ShipSaaS"
        />
        <h1
          class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          Build Products with 100% Confidence
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          <strong>ShipSaaS</strong> focuses on delivering exceptional helpers,
          processes and libraries to assist you in building and enhancing your next SaaS
          products.

          <br />
          <br />
          We are specializing in <strong class="text-emerald-500">PHP 8+ & Laravel 10+</strong>
        </p>

        <ul class="list-disc text-lg text-gray-600 leading-8 ml-4 my-4">
          <li>Deliver faster ✅</li>
          <li>Scale better ✅</li>
          <li>Life easier ✅</li>
        </ul>

        <div class="mt-10 flex items-center gap-x-6">
          <router-link
            :to="{
              name: 'project-page',
            }"
            class="rounded-md flex gap-2 items-center bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Check out our work
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </router-link>
          <a
            href="https://github.com/shipsaas"
            target="_blank"
            class="text-sm font-semibold leading-6 text-gray-900 flex gap-2 items-center"
          >
            Our GitHub
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div
        class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
      >
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <div
            class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
          >
            <img
              src="@/assets/images/new-repo.png"
              alt="ShipSaaS's Repositories"
              class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 h-[800px] object-cover object-top"
              width="1216px"
              height="800px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
