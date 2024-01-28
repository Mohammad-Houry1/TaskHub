import { createRouter, createWebHistory } from '@ionic/vue-router'
import navb from '../components/nav.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: navb,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'Home',
        component: () => import('../components/index.vue')
      },
      {
        path: 'Calendar',
        component: () => import('../components/calendar.vue')
      },
      {
        path: 'Add',
        component: () => import('../components/addTask.vue')
      },
      {
        path: 'Categories',
        component: () => import('../components/Categories.vue')
      },
      {
        path: 'Profile',
        component: () => import('../components/Profile.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
