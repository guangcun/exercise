<template>
	<div>
    <Header :title="title"></Header>
		<div class="header" @click="toLogin">
			<img class="userImg" :src="userInfo.img? userInfo.img:'http://img3.imgtn.bdimg.com/it/u=2778838901,1985278700&fm=15&gp=0.jpg'" ></img>
			<div class='userInfo'>
				<p>{{userInfo.userName? userInfo.userName:'请登录'}}</p>
			</div>
		</div>	
		<div class="content">
			<h2>我的资产</h2>
			<p class='line'></p>
			<div class="myAssetList">
				<div class='assetItem'>
					<span>￥0</span>
					<span>回馈金</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>红包</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>优惠券</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>津贴</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>礼品卡</span>
				</div>
			</div>
			<!-- 列表选项 -->
			<div class="personalList">
				<div class="navItem" v-for='(item, index) in personalList' :key='index'>
					<i class='iconfont ' :class='item.icon'></i>
					<p>{{item.name}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../../components/Header/Header';
	export default {
		data(){
			return {
				title:'个人中心',
				img:'./personal.png',
				userInfo: {
				},
				personalList: [
					{
						name: '我的订单',
						icon: 'icon-dingdan11'
					},
					{
						name: '我的拼团',
						icon: 'icon-pintuandingdan'
					},
					{
						name: '领红包',
						icon: 'icon-tubiaolunkuo-1'
					},
					{
						name: '我的积分',
						icon: 'icon-jifen3'
					},
					{
						name: '地址管理',
						icon: 'icon-dizhiguanli'
					},
					{
						name: '账号安全',
						icon: 'icon-dingdan11'
					},
					{
						name: '联系客服',
						icon: 'icon-zhanghaoanquan'
					},
					{
						name: '用户反馈',
						icon: 'icon-tubiaolunkuo-'
					},
					{
						name: '帮助中心',
						icon: 'icon-bangzhuzhongxin'
					}
				]
			}
		},
		mounted() {
		 let userInfo=localStorage.getItem('userInfo')
		 if (userInfo) {
			 this.userInfo=JSON.parse(userInfo)
		 };
		},
    components:{
      Header,
    },
		methods: {
			toLogin(){
        this.$router.push("/login")
			}
		}	
	}
</script>

<style lang="stylus">
	.header
		display flex
		background #EED7B5
		padding 40px 0
		.userImg 
			width 100px
			height 100px
			margin 0 50px 0 30px
			background #FFFFFF
			border-radius 50px
		.userInfo
			p
				height 50px
				line-height 50px
				font-size 34px
	.content
		h2
			font-size 26px
			line-height 80px
			margin-left 5%
		.line
			width 90%
			height 2px
			background #eee
			margin 0 auto
		.myAssetList
			width 90%
			margin 20px auto
			display flex 
			.assetItem
				width 25%
				display flex
				flex-direction column
				align-items center
				font-size 24px
				color #333333
				line-height 40px
		.personalList
			display flex
			flex-wrap wrap
			border-top 1px solid #EEEEEE
			.navItem
				width 33.3333%
				text-align center
				border-bottom 1px solid #EEEEEE
				border-right 1px solid #EEEEEE
				box-sizing border-box
				padding 30px 0
				&:nth-child(3n)
					border-right none
				.iconfont 
					font-size 60px
				p
					font-size 24px
					line-height 40px
				
</style>
