import { createRouter, createWebHistory } from 'vue-router'
import EventListview from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListview,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
  ],
})

export default router
