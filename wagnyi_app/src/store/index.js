import Vue from 'vue';
import Vuex from 'vuex';
//声明使用vuex

Vue.use(Vuex)
import indexData from './modules/index.js'
import sortData from './modules/sort.js'
import cart from './modules/cart.js';
//生成vuex对象
export default new Vuex.Store({
  modules:{
    indexData,
    sortData,
    cart,
  }
})