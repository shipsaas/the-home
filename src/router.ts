import { createRouter, createWebHistory, type RouteComponent } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: (): Promise<RouteComponent> => import('./pages/HomePage/IndexPage.vue'),
    meta: {
      title: 'Home - ShipSaaS',
    },
  },
  {
    path: '/projects',
    name: 'project-page',
    component: (): Promise<RouteComponent> => import('./pages/ProjectPage/ProjectPage.vue'),
    meta: {
      title: 'Projects',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
