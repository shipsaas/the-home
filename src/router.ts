import {
  createRouter,
  createWebHistory,
  type RouteComponent,
} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: (): Promise<RouteComponent> =>
      import('./pages/HomePage/IndexPage.vue'),
  },
  {
    path: '/projects',
    name: 'project-page',
    component: (): Promise<RouteComponent> =>
      import('./pages/ProjectPage/ProjectPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
