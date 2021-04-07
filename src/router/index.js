import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',  //gh-page
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

export default router
