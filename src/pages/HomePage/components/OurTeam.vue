<template>
  <div class="bg-white py-24 md:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5"
    >
      <div class="max-w-2xl xl:col-span-2">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About the team
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to develop AWESOME things and contribute them to the
          big Open Source Software world.

          <br />
          <br />
          You could be the next one to join us 😉
        </p>
      </div>
      <ul
        role="list"
        class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
      >
        <li
          v-for="person in people"
          :key="person.name"
          class="flex flex-col gap-10 pt-12 sm:flex-row"
        >
          <img
            class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
            :src="person.imageUrl"
            :alt="person.name"
          />
          <div class="max-w-xl flex-auto">
            <h3
              class="text-lg font-semibold leading-8 tracking-tight text-gray-900"
            >
              {{ person.name }}
            </h3>
            <p class="text-base leading-7 text-gray-600">{{ person.role }}</p>
            <p class="mt-6 text-base leading-7 text-gray-600">
              {{ person.bio }}
            </p>
            <ul role="list" class="mt-6 flex gap-x-6">
              <li v-if="person.twitterUrl">
                <a
                  :href="person.twitterUrl"
                  target="_blank"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">Twitter</span>
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>
              <li v-if="person.linkedinUrl">
                <a
                  :href="person.linkedinUrl"
                  target="_blank"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li v-if="person.githubUrl">
                <a
                  :href="person.githubUrl"
                  target="_blank"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">GitHub</span>
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
type PersonInfo = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
};

const people = ref<PersonInfo[]>([
  {
    name: 'Seth Phat',
    role: 'Founder & Leader of ShipSaaS',
    imageUrl: 'https://github.com/sethsandaru.png',
    bio: `
      A Sr. Software Engineer who deeply passionate about Technologies
      and actively contributing to the open-source software community.
      Continually striving to improve and innovate within the ecosystem.
    `,
    linkedinUrl: 'https://www.linkedin.com/in/sethphat',
    githubUrl: 'https://github.com/sethsandaru',
  },
]);
</script>
