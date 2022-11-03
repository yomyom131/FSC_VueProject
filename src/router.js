import {createWebHistory, createRouter } from 'vue-router';
import Computed from './components/Computed.vue';
import Conditional from './components/Conditional.vue'
import Count from './components/Count.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'Helloworld',
    component: HelloWorld
  },
  {
    path: '/computed',
    component: Computed,
  },
  {
    path: '/conditional',
    component: Conditional,
  },
  {
    path: '/count',
    name: 'Count',
    component: Count,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
