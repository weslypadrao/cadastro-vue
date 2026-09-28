import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/componentes/LoginForm.vue'
import AppHeader2 from '@/componentes/AppFooter2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/app-footer',
      name: 'AppFooter',
      component: AppHeader2
    }
  ]
})

export default router