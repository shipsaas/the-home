<template>
  <div class="min-h-full">
    <AppHeader />

    <main>
      <router-view></router-view>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '@/components/Layout/AppFooter.vue';
import AppHeader from '@/components/Layout/AppHeader.vue';
</script>
