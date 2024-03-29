<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    class="border-b border-gray-200 bg-white"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="@/assets/images/shipsaas-logo.png"
              alt="ShipSaaS"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="@/assets/images/shipsaas-logo.png"
              alt="ShipSaaS"
            />
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <a
              v-for="(item, index) in navigation"
              :key="item.name"
              :class="[
                index === currentActiveIndex
                  ? 'border-emerald-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
              ]"
              href="javascript:void(0);"
              :aria-current="index === currentActiveIndex ? 'page' : undefined"
              @click="item.onClick"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <a
            href="https://github.com/shipsaas"
            target="_blank"
            class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex gap-1"
          >
            <span>GitHub</span>
            <LinkIcon class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <DisclosureButton
          v-for="(item, index) in navigation"
          :key="item.name"
          as="a"
          href="javascript:void(0);"
          :class="[
            index === currentActiveIndex
              ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
              : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
            'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
          ]"
          :aria-current="index === currentActiveIndex ? 'page' : undefined"
          @click="item.onClick"
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon, LinkIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentActiveIndex = ref<number>(0);

type NavigationItem = {
  name: string;
  onClick: () => void;
};

const navigation = ref<NavigationItem>([
  {
    name: 'Home',
    url: '/',
    onClick() {
      router.push({
        name: 'home-page',
      });
      currentActiveIndex.value = 0;
    },
  },
  {
    name: 'Projects',
    url: '/projects',
    onClick() {
      router.push({
        name: 'project-page',
      });
      currentActiveIndex.value = 1;
    },
  },
]);

onMounted(() => {
  navigation.value.forEach((navItem, index) => {
    if (!window.location.pathname.includes(navItem.url)) {
      return;
    }

    currentActiveIndex.value = index;
  });
});
</script>

<style scoped></style>
