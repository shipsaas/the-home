<template>
  <ProjectBanner />
  <ProjectList />
</template>

<script setup lang="ts">
import ProjectList from '@/pages/ProjectPage/components/ProjectList.vue';
import ProjectBanner from '@/pages/ProjectPage/components/ProjectBanner.vue';
import { setPageTitle } from '@/libraries/pageTitle';

setPageTitle('Our Projects');
</script>
