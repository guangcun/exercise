import axios from 'axios';
//对 axios的二次封装

const ajax=axios.create({
  baseURL:'/api',
  timeout:20000
})
// 添加请求拦截器
ajax.interceptors.request.use((config)=>{
  return config
})
//添加响应拦截器
ajax.interceptors.response.use(
  response=>{
    //返回的数据不是 response 而是 response.data
    return response.data
  },
  error=>{
    console.log('请求出错',error);
  }
)

export default ajax