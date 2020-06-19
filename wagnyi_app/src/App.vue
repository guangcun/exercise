<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer';
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style lang='stylus'>
@import '../static/font/iconfont.css'
@import url("../static/font/iconfont.styl");
html,body
  margin 0
  padding 0
a
  text-decoration none
  color black
</style>
