<template>
  <div>
    <Header :title="title"></Header>
    <div class="loginContainer" v-if="isShow==='login'">
      <img class="logo" src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" mode=""></img>
      <p class='text'>网易自营，精品生活家居品牌</p>
      <div class="loginMethods">
        <button class="login phoneLogin" @click="login('phone')">
          手机号登录
        </button>
        <button class="login emailLogin" @click="login('email')">
          邮箱登录
        </button>
      </div>
    </div>
		<phoneLogin v-else-if="isShow==='phone'"></phoneLogin>
		<emailLogin v-else></emailLogin>
  </div>
</template>

<script>
import Header from '../../components/Header/Header';
import phoneLogin from '../../components/phoneLogin/phoneLogin.vue'
import emailLogin from '../../components/emailLogin/emailLogin';

	export default {
		data() {
			return {
				title:'网易严选',
				isShow:'login'
			}
    },
    components:{
			Header,
			phoneLogin,
			emailLogin
    },
		methods: {
			login(isShow){
				this.isShow=isShow
			}
		}
	}
</script>

<style lang="stylus">
	.loginContainer
		width 100%
		height calc(100vh- 100px)
		background #F8F8F8
		display flex
		align-items center
		flex-direction column
		.logo
			width 300px
			height 100px
			margin-top 200px
		.text
			font-size 26px
			color #666
		.loginMethods
			width 80%
			margin 150px auto
			display flex
			justify-content space-around
			.login
				width 240px
				height 80px
				background #DD1A21
				color #FFFFFF
				text-align center
				line-height 80px
				font-size 26px
</style>
