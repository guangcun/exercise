let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let indexDataNav=require('./datas/indexCateModule.json')
//请求主页导航
router.get('/homeNav',(ctx,next)=>{
  ctx.body={
    code:200,
    data:indexDataNav
  }
})
//主页数据
let indexData=require('./datas/index.json')
router.get('/home',(ctx,next)=>{
  ctx.body={
    code:200,
    data:indexData
  }
})















app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
