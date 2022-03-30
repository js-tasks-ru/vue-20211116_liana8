import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/02-NotFound'),
  routes: [
    {
      path: '/page-a',
      name: 'pageA',
      component: () => import('../views/PageA'),
    },
    {
      path: '/page-b',
      name: 'pageB',
      component: () => import('../views/PageB'),
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component:() => import('../views/PageNotFound'), 
    },    
  ],
});
