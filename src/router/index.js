import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetailsPage from '../views/ProductDetailsPage.vue'
import CartPage from '../views/CartPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shopping List',
    component: ProductsPage
  },
  {
    path: '/details',
    name: "Product Details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductDetailsPage
  },{
    path: '/myCart',
    name: "",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CartPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
