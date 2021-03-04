import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'HomeLayout'
    },
    component: function () {
      return import('../views/Home.vue')
    }
  },
  {
    path: '/news',
    name: 'News',
    component: function () {
      return import('../views/News.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
