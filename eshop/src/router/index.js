import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail'
import Error404 from '../views/Error404'
import Products from '../views/Products'
import ProductCategory from '../views/ProductCategory'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductDetail
  },
  {
    path: '/product/:category',
    name: 'ProductCategory',
    component: ProductCategory
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
