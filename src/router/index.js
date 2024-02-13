import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contacts/:contact?',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/multiply/:num1/:num2',
      name: 'multiply',
      component: () => import('../views/MultiplyView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      children: [
        { path: 'director', name: 'director', component: () => import('../components/DirectorContact.vue') },
        {
          path: 'company',
          name: 'company',
          component: () => import('../components/CompanyContacts.vue')
        }
      ]
    }
  ]
})

export default router
