
import Home from '../pages/Home/Home.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Sort from '../pages/Sort/Sort.vue'
import Worthy from '../pages/Worthy/Worthy.vue'
import Login from '../pages/Login/Login.vue';
import phoneLogin from '../components/phoneLogin/phoneLogin.vue'


export default  [
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
      path:'/login',
      component:Login,
      children:[
        {
          path:'/phone',
          component:phoneLogin,
          name:'phone'
        }
      ]
    },
   ,
    {
      path:'/',
      redirect: '/home'
    }
  ]

