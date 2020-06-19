
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js';

/* 
方案2: 修正Vue原型上的push和replace方法
*/

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 给成功回调的参数指定一个默认的函数
VueRouter.prototype.push = function (location, onComplete = () => {}, onAbort) {
  return originPush.call(this, location, onComplete, onAbort)
}

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  return originReplace.call(this, location, onComplete, onAbort).catch(() => {})
}

// 声明使用vue的插件
Vue.use(VueRouter)

// 创建路由器对象 
const router = new VueRouter({
  mode: 'history', // 路由路径不带#号
  // 配置应用中的所有路由
  routes,
})

export default router
