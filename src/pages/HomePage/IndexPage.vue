<template>
  <HeroBanner />
  <TrustedByPeople />
  <OurWorks />
  <ProjectsEcosystem />
  <FounderSharing />
  <OurTeam />
  <ContactSection />
</template>

<script setup>
import OurTeam from '@/pages/HomePage/components/OurTeam.vue';
import OurWorks from '@/pages/HomePage/components/OurWorks.vue';
import HeroBanner from '@/pages/HomePage/components/HeroBanner.vue';
import FounderSharing from '@/pages/HomePage/components/FounderSharing.vue';
import { setPageTitle } from '@/libraries/pageTitle';
import TrustedByPeople from "@/pages/HomePage/components/TrustedByPeople.vue";
import ProjectsEcosystem from "@/pages/HomePage/components/ProjectsEcosystem.vue";
import ContactSection from "@/pages/HomePage/components/ContactSection.vue";

setPageTitle('Home');
</script>
