import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'
import { Store } from 'vuex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/index.vue')
      },
      {
        path: '/project',
        name: 'project',
        component: () => import('../views/project/index.vue')
      },
      {
        path: '/project/:action',
        name: 'projectEdit',
        component: () => import('../views/project/edit.vue')
      },
      {
        path: '/recover',
        name: 'recover',
        component: () => import('../views/recover/index.vue')
      },
      {
        path: '/api',
        name: 'api',
        component: () => import('../views/api/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  }
]

const router: VueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  (router.app.$options.store as Store<any>).commit('setLoading')
  next()

})

router.afterEach(() => {
  (router.app.$options.store as Store<any>).commit('cancelLoading')
})

export default router
