<template>
  <section
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
  >
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    />
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <figure class="mt-10">
        <blockquote
          class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
        >
          <p>
            “I've been using OSS for my whole career and I'm happily adding some
            of my honest work to the OSS world.

            <br />

            I hope ShipSaaS can become everyone's helpful and reliable
            companion. ”
          </p>
        </blockquote>
        <figcaption class="mt-10">
          <img
            class="mx-auto h-10 w-10 rounded-full"
            src="https://github.com/sethsandaru.png"
            alt="Seth Phat - Seth Sandaru"
          />
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <div class="font-semibold text-gray-900">Seth Phat</div>
            <svg
              viewBox="0 0 2 2"
              width="3"
              height="3"
              aria-hidden="true"
              class="fill-gray-900"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="text-gray-600">Main Leader of ShipSaaS</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
