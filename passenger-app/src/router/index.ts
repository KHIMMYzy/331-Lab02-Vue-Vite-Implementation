import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PassengerLayoutView from '@/views/passenger/LayoutView.vue'
import PassengerDetailView from '@/views/passenger/DetailView.vue'
import PassengerAirlinesView from '@/views/passenger/AirlinesView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ResourceNotFoundView from '@/views/ResourceNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/passenger/:id',
      component: PassengerLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail',
          component: PassengerDetailView,
          props: true,
        },
        {
          path: 'airlines',
          name: 'passenger-airlines',
          component: PassengerAirlinesView,
          props: true,
        },
      ],
    },
    {
      path: '/404/:resource',
      name: 'resource-not-found',
      component: ResourceNotFoundView,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router