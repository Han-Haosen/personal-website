import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetailsPage from '../views/ProductDetailsPage.vue'
import CartPage from '../views/CartPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Shopping List',
    component: ProductsPage
  },
  {
    path: '/products/:id',
    name: "Product Details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductDetailsPage
  },{
    path: '/myCart',
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CartPage
  },
  {
    path:'/',
    redirect:'/products',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
