<template>
    <div class="bg-gray-50">
        <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
            <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
                <div class="max-w-3xl">
                    <h2 class="text-4xl font-bold tracking-tight text-gray-900">We built our business on customer service</h2>
                    <p class="mt-4 text-gray-500">At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it.</p>
                </div>
                <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                    <div v-for="incentive in incentives" :key="incentive.name" class="sm:flex lg:block">
                        <div class="sm:flex-shrink-0">
                            <img class="h-16 w-16" :src="incentive.imageSrc" alt="" />
                        </div>
                        <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                            <h3 class="text-sm font-medium text-gray-900">{{ incentive.name }}</h3>
                            <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
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
        name: 'Free shipping',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        name: '10-year warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
        name: 'Exchanges',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
]
</script>