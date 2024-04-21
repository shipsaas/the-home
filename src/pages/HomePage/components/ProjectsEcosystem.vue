<template>
  <div class="bg-gray-100 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex gap-3 items-center">
          ShipSaaS's Ecosystem

          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.63 8.13C.85 10.49.05 12.53.76 13.24c1 1 4.6-1 8-4.44s5.44-7 4.44-8c-.64-.65-2.38 0-4.47 1.41"/><path d="M12.05 4.92A5 5 0 0 1 7.5 12a5.06 5.06 0 0 1-1.95-.39M3.5 10a5 5 0 0 1 7-7"/></g></svg>
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          Our in-house services that helps you to develop features faster, scale better and so much more

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline" viewBox="0 0 36 36"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><ellipse cx="11.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"/><path fill="#664500" d="M28.457 17.797c-.06-.135-1.499-3.297-4.457-3.297c-2.957 0-4.397 3.162-4.457 3.297a.503.503 0 0 0 .755.605c.012-.009 1.262-.902 3.702-.902c2.426 0 3.674.881 3.702.901a.498.498 0 0 0 .755-.604M5.999 12.458a1 1 0 0 1-.799-1.6c3.262-4.35 7.616-4.4 7.8-4.4a1 1 0 0 1 .004 2c-.156.002-3.569.086-6.205 3.6a.995.995 0 0 1-.8.4m23.002 2.125a.998.998 0 0 1-.801-.4c-2.592-3.457-6.961-2.627-7.004-2.62a1 1 0 0 1-.393-1.961c.231-.047 5.657-1.072 8.996 3.38a1 1 0 0 1-.798 1.601m-5.747 8.994a.513.513 0 0 0-.597.06c-.01.008-1.013.863-4.657.863c-3.641 0-4.646-.854-4.646-.854a.5.5 0 0 0-.838.475c.01.044 1.144 4.379 5.484 4.379s5.474-4.335 5.485-4.379a.497.497 0 0 0-.231-.544"/></svg>
        </p>
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col gap-8 lg:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img :src="post.imageUrl" :alt="post.imageAlt" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <div class="flex items-center gap-x-4 text-xs">
                <a class="relative z-10 rounded-full bg-emerald-200 px-3 py-1.5 font-medium text-gray-800 hover:bg-gray-100">{{ post.category.title }}</a>
              </div>
              <div class="group relative max-w-xl">
                <h3 class="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a :href="post.href" target="_blank">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 text-sm leading-6 text-gray-600">{{ post.description }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="mt-10 sm:mt-20 flex justify-center gap-2 items-center">
        <p class="text-base font-medium italic">and more to come, stays tuned!</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 128 128"><path fill="#FFCA28" d="M105.06 68.86c-7.62 1.78-14.3 6.26-15.32 7.78c-.25.37-.85.05-1.69-.74c.15-17.88.22-46.04-.57-59.9c-.55-9.65-4.14-11.72-7.33-11.96c-5.05-.39-6.93 2.52-7.65 11.57c-1.13 14.27-1.06 29.37-1.68 32.4c0 0-2.15-7.78-10.02-8.93c-8.52-1.24-9.96 9.96-9.96 9.96s-5.11-7.75-13.13-4.69c-6.68 2.55-6.75 11.71-6.75 11.71c-2.94 1.3-6.42-14.55-9.39-30.78c-1.67-9.16-12.97-6.07-13.06 2.51c-.14 12.92 4.91 50.88 5.48 55.01c2.41 17.29 9.35 41.2 39.23 41.2c15.32 0 22.21-2.79 30.74-12.36c6.67-7.49 9.53-16.6 22.16-25.02c9.18-6.12 15.38-4.96 15.37-10.96c0-4.49-5.09-9.45-16.43-6.8"/><path fill="#FFB300" d="M50.32 66.89c.18-.33 2.8-2.15 3.46-1.08c4.45 7.14 13.1 5.91 15.39-1.39c.27-.86 2 13.51-6.73 17c-2.61 1.04-6.12 1.09-7.99-1.01c-1.57-1.76-3.22-1.47-6.74.66c-2.43 1.47-7.3.39-9.25-1.67c-1.95-2.06-3.3-4.36-4.14-7.08c-.26-.83-.33-2.14.62-2.58c.35-.15 9.93 7.26 15.38-2.85"/><path fill="#EDA600" d="M88.09 14.93c-.65-11.8-8.23-10.9-8.23-10.9s4.97 2.4 5.28 11c.3 8.33.76 38.1 1.11 56.56c0 5.26-7.33 5.24-14.74 7.71c-.88.29-1.55-.59-1.19-1.44c1.24-2.92 4.15-8.96 2.21-22.76c-.68-4.86-1.99-8.34-2.96-10.11c-3.43-6.27-10.13-6-10.13-6s4.81 1.17 6.96 6.64c1.46 3.7 5 14.57 1.3 27.54c-.86 3.02-3.03 6.59-8.26 6.14c-1.24-.11-4.44-.88-4.68-3.75c-.17-2.06-.03-4.74-.14-7.19c-.17-3.88-1.54-13.74-2.96-18.31c-.9-2.9-3.98-6.41-10.61-6.5c0 0 2.98.41 5.97 5.88c.66 1.21 1.69 3.88 2.44 7.89c.5 3.68 1.94 14.57.06 18.46c-1.65 3.4-8.57 4.75-11.3 1.45c-4.96-6-6.72-25.22-6.72-25.22s-.62 1.32-.98 3.57c-2.47-2.69-4.83-16.19-8.03-29.92c-.89-3.83-3.33-7.13-8.29-5.72c0 0 4.42.45 5.37 6.26c1.36 8.28 4.1 19.78 5.51 25.81c1.29 5.5 3.12 7.28 5.21 7.82v.08c.18 3.31.62 8.78 1.85 13.02c2.16 7.4 4.06 8.34 5.96 9.49c4.33 2.61 11.86.86 14.21-2.05c1.4 1.69 3.5 2.79 5.92 3.02c.16.02 1.52-.01 2.9-.08c.85-.04 1.27 1 .64 1.57c-2.92 2.67-5.31 6.17-6.92 11.28c-1.21 3.83-1.59 6.8-1.64 8.92c-.02.86 1.18 1.06 1.43.24c.36-1.2.77-2.5 1.18-3.6c1.45-3.9 4.41-15.82 20.61-19.83c3.05-.76 6.85-1.11 9.96-2.67v.07s.23-.14.58-.37c1.03-.59 1.97-1.33 2.76-2.3c.06-.08.11-.18.15-.3c.08-.1.16-.19.24-.29c0 0-1.25-47.13-2.03-61.11m27.51 64.65c-3.35.95-8.37 2.61-12.13 5.12c-8.85 5.9-12.77 11.65-16.25 17.21c-1.73 2.77-3.37 5.38-5.48 7.75c-7.95 8.93-13.84 12.06-28.28 12.42c-3.7.09-8.17 1.29-8.17 1.29c2.44.41 5.08.63 7.92.63c15.32 0 22.21-2.79 30.74-12.36c6.67-7.49 9.53-16.6 22.16-25.02c8.76-5.84 14.79-5.07 15.32-10.2c.02 0-1.08 1.82-5.83 3.16"/></svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'RenderPDF.io',
    href: 'https://renderpdf.io',
    description:
      'RenderPDF.io is a Render-PDF-as-a-Service that provides developer-friendly APIs to render your HTML content to modern PDFs files in seconds 😎.',
    imageUrl:
      'https://renderpdf.io/assets/images/cover.png',
    imageAlt: 'RenderPDF.io cover',
    category: { title: 'Handle Documents' },
  },
  // More posts...
]
</script>
