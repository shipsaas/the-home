<template>
  <HeroBanner />
  <OurWorks />
  <FounderSharing />
  <OurTeam />
</template>

<script setup>
import OurTeam from '@/pages/HomePage/components/OurTeam.vue';
import OurWorks from '@/pages/HomePage/components/OurWorks.vue';
import HeroBanner from '@/pages/HomePage/components/HeroBanner.vue';
import FounderSharing from '@/pages/HomePage/components/FounderSharing.vue';
import { setPageTitle } from '@/libraries/pageTitle';

setPageTitle('Home');
</script>
