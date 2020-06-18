import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Sort from '../pages/Sort/Sort.vue'
import Worthy from '../pages/Worthy/Worthy.vue'
import Recommend from '../components/Recommend/Recommend.vue'
import CartList from '../components/CartList/CartList.vue'

//声明使用 VueRouter
Vue.use(VueRouter)

//注册路由
export default new VueRouter({
  mode:'history', //去掉路径中的#
  //应用中的路由
  routes: [
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/sort',
      component:Sort
    },
    {
      path:'/worthy',
      component:Worthy
    },
    {
      path:'/',
      redirect: '/home'
    }
  ]
})
