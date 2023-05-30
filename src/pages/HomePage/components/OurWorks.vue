<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div class="max-w-3xl">
          <h2 class="text-4xl font-bold tracking-tight text-gray-900">
            We built AWESOME Helpers & Libraries
          </h2>
          <p class="mt-4 text-gray-500">
            ShipSaaS is an open-source organization that empowers all types of SaaS products.
            <br />
            <br />
            We offer packages for PHP & Laravel. Feel free to install them and enhance your productivity and processes.
            <br />
            <br />
            Focus on your products and business logic; let us help you concentrate on the Core.
            <br />
            <br />
            ShipSaaS's ultimate goal is to become everyone's helpful and reliable companion.
          </p>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div
            v-for="incentive in incentives"
            :key="incentive.name"
            class="sm:flex lg:block"
          >
            <div class="sm:flex-shrink-0">
              <img class="h-16 w-16" :src="incentive.imageSrc" alt="" />
            </div>
            <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 class="text-sm font-medium text-gray-900">
                {{ incentive.name }}
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                {{ incentive.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const incentives = [
  {
    name: 'Focus on the business',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      `Focus 100% on your business logic, let us handle the "Core" parts.`,
  },
  {
    name: 'Battle-tested & Reliable',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      `We cover everything under Unit, Integration & E2E Testing with 90%+ coverage. Provide a huge confidence & reliability to your mission-critical applications.`,
  },
  {
    name: 'Exchanges',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];
</script>
