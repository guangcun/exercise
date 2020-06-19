<template>
  <div class="phone">
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <van-form @submit="onSubmit" label-width='90'>
      <van-field
        v-model="username"
        name="userName"
        placeholder="邮箱"
        :rules="[{ required: true,message: '请填写邮箱' },{pattern:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,message:'邮箱格式有误'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        autosize
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' },{pattern:/^[0-9]{6,18}$/,message:'密码必须是6~18位'}]"
      />
      <div style="margin:0 ;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>

import Vue from 'vue';
import { Form ,Field,Button} from 'vant';
import {reqLogin} from '../../api/index';
Vue.use(Form);
Vue.use(Field);
Vue.use(Button)
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  components:{
    
  },
  methods: {
      async onSubmit(values) {
      console.log('submit', values);
      const {userName,password}=values
      let result=await reqLogin(userName,password)
      if (result.code===200) {
        localStorage.setItem('userInfo',result.data)
        this.$router.push('/personal')
      }
    },
  },
}
</script>

<style lang="stylus">
.phone
  width 100%
  height calc(100vh - 200px)
  .logo
    width 100%
    text-align center
    img 
      width 266px
      height 90px
  .van-form
    width 600px
    height 300px
    margin 0 auto
    margin-top 200px
    .van-field
      width 600px
      height 100px
      font-size 40px  
      .van-field__body
        border-bottom 2px solid #eee
      .van-field__error-message
        font-size 24px
    .van-button
      display inline-block
      width 600px
      height 80px
      background 	#1E90FF
      border-radius 0
      margin-top 25px
      font-size 24px
</style>
