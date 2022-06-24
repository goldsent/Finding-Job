import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import logIn from '../views/logIn.vue'
import register from '@/views/register.vue'
import postjop from '@/views/postjop.vue'
import managepost from '../views/managepost.vue'
import homeCompany from '@/views/homeCompany.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homeCompany',
    name: 'homeCompany',
    component: homeCompany
  },{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/managepost',
    name: 'managepost',
    component: managepost
  },
  {
    path: '/postjop',
    name: 'postjop',
    component: postjop
  },
  {
    path: '/editpost/:id',
    name: 'editpost',
    component: postjop
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/logIn',
    name:'LogIn',
    component: logIn
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
