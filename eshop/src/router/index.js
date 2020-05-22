import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '../views/Error404'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(
      '../views/Home.vue'
      /* webpackChunkName: 'HomeView' */
    )
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(
      '../views/Products.vue'
      /* webpackChunkName: 'ProductView' */
    )
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(
      '../views/ProductDetail.vue'
      /* webpackChunkName: 'ProductDetail' */
    )
  },
  {
    path: '/product/:category',
    name: 'ProductCategory',
    component: () => import(
      '../views/ProductCategory.vue'
      /* webpackChunkName: 'ProductCategory' */
    )
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
