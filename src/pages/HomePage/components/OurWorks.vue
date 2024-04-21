<template>
  <div class="bg-emerald-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div>
          <h2 class="text-base font-semibold leading-7 text-emerald-600">
            What's we do?
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            We've built AWESOME Libraries & Helpers
          </p>
          <p class="mt-6 text-base leading-7 text-gray-600">
            ShipSaaS proudly empowers all types of
            SaaS products.
            <br />
            <br />
            We ship packages for PHP & Laravel. Feel free to install them and
            enhance your productivity and processes.
            <br />
            <br />
            Focus on your products and business logic; let us
            concentrate on the Core for you.
          </p>
        </div>
        <dl
          class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-9"
          >
            <dt class="font-semibold text-gray-900">
              <CheckIcon
                class="absolute left-0 top-1 h-5 w-5 text-emerald-500"
                aria-hidden="true"
              />
              {{ feature.name }}
            </dt>
            <dd class="mt-2">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid';

const features = [
  {
    name: 'PHP & Laravel',
    description:
      'PHP runs through our veins, with a primary focus on the Laravel framework - biggest framework in the world.',
  },
  {
    name: 'Battle-tested with high coverage',
    description:
      'Unit and Integration testing are essential in our mindset. We aim for high coverage (90%+).',
  },
  {
    name: 'Highly Reliable',
    description:
      'We also write reliable E2E Test Cases to validate our libraries in Real Life scenarios.',
  },
  {
    name: 'Super Scalable',
    description: `We don't just focus on the now, we focus on the FUTURE too.
    We ship scalable libraries & systems.`,
  },
  {
    name: 'Community-first',
    description:
      'Our works are being used and contributed from the community around the world.',
  },
  {
    name: 'Actively in Development',
    description: `Our repositories are being checked frequently and ensure it still stays in the "state-of-the-art" state`,
  },
];
</script>
