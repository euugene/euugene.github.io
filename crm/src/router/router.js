import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main-layout' },
    component: () => import('./../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty-layout' },
    component: () => import('./../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Register',
    meta: { layout: 'empty-layout' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'main-layout' },
    component: () => import('./../views/Categories.vue')
  },
  {
    path: '/detailRecord',
    name: 'DetailRecord',
    meta: { layout: 'main-layout' },
    component: () => import('./../views/DetailRec.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'main-layout' },
    component: () => import('../views/History.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Record.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
