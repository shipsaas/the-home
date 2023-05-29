import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from '@/pages/HomePage/IndexPage.vue';

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'ShipSaaS',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
