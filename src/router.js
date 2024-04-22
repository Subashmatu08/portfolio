import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Projects from './views/projects.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/proj',
    name: 'Projects',
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   if (isMobile) {
//     window.location.href = 'https://www.example-mobile.com';
//   } else {
//     next();
//   }
// });

export default router;
