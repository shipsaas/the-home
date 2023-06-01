<template>
  <div class="bg-white pb-10">
    <div class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
      <h2 class="sr-only">Projects</h2>

      <div
        class="-mx-px grid grid-cols-2 border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative border-gray-200 p-4 sm:p-6"
        >
          <div
            class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75"
          >
            <img
              :src="product.imageSrc"
              :alt="product.name"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="pb-4 pt-10 text-center">
            <h3 class="text-sm font-medium text-gray-900">
              <a
                :href="`https://github.com/${product.repository}`"
                target="_blank"
              >
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>
            <div class="mt-3 flex flex-col items-center">
              <div class="flex items-center pb-4">
                <img
                  :src="`https://img.shields.io/github/stars/${product.repository}?style=social`"
                  :alt="`${product.name}'s stargazers`"
                />
              </div>
              <div class="flex items-center pb-2 gap-1">
                <Tag
                  v-for="(tag, tagIndex) in product.tags"
                  :key="`${tag}-${tagIndex}`"
                >
                  {{ tag }}
                </Tag>
              </div>
              <p class="mt-1 text-sm text-gray-500">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from "@/components/Tag/Tag.vue";

const products = [
  {
    id: 1,
    name: 'DocKing',
    imageSrc:
      'https://raw.githubusercontent.com/shipsaas/docking/main/docs/img/logo.png',
    repository: 'shipsaas/docking',
    description:
      'Your shared-microservice that takes over the document templates management & render/export PDF.',
    tags: [
      'System',
      'Infrastructure',
    ],
  },
  {
    id: 2,
    name: 'Laravel Priority Queue',
    imageSrc: 'https://i.imgur.com/H8OEMhQ.png',
    repository: 'shipsaas/laravel-priority-queue',
    description: `Priority Queues driver implementation for Laravel. Utilizing DB Driver.`,
    tags: [
      'Library',
      'Infrastructure',
    ],
  },
  {
    id: 3,
    name: 'Laravel Safe Dispatcher',
    imageSrc:
      'https://raw.githubusercontent.com/shipsaas/safe-dispatcher/main/docs/SafeDispatcher.png',
    repository: 'shipsaas/safe-dispatcher',
    description: `Laravel SafeDispatcher dispatches your Queue Jobs in a safer & recoverable way.`,
    tags: [
      'Library',
      'Reliability',
      'Stability',
    ],
  },
  {
    id: 4,
    name: 'Ready',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    repository: 'shipsaas/ready',
    description: `Ready injects completely generic stuff (Countries, Currencies,...) to build your next freaking SaaS products`,
    tags: [
      'Library',
      'Scaffolding',
    ],
  },
  {
    id: 5,
    name: 'CurrencyFX',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    repository: 'shipsaas/currency-fx',
    description: `PHP (Laravel's portable) library to handle Currency FX (Rates, Conversions,...). Drivers for multiple online services.`,
    tags: [
      'Library',
      'Helper',
    ],
  },
  {
    id: 6,
    name: 'NeverThrow',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    repository: 'shipsaas/never-throw',
    description: `Type-safe & IDE-friendly Response-first over Throw Exceptions. PHP NeverThrow library`,
    tags: [
      'Library',
      'Best practice',
    ],
  },
  {
    id: 8,
    name: 'DevFlag',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    repository: 'shipsaas/dev-flag',
    description: `Enabling your Application development to follow the CI/CD best practice by using the DevFlag`,
    tags: [
      'Library',
      'Best practice',
    ],
  },
];
</script>
