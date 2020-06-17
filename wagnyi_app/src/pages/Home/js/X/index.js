import {css} from './transform.js';
export const scorllX=function (navWrap,list) {
  css(list,"translateZ",0);
  var minX=navWrap.clientWidth-list.offsetWidth;//最远距离

  var eleStartX=0;//滑屏元素一开始的位置;
  var touchStartX=0;//手指一开始的位置

  var lastPoint=0;//手指上一次touchmove完成的位置
  var lastTime=0;//手指上一次完成时的时间点
  var pointDisX=0;//touchmove移动的距离
  var timeDisX=0;//touchmove完成的时间

  navWrap.addEventListener("touchstart",(ev)=>{
      ev=ev||event;
      var touchC=ev.changedTouches[0];//触发当前事件时,触发事件的手指列表
      eleStartX=css(list,"translateX");
      touchStartX=touchC.clientX;
      lastPoint=touchC.clientX;
      lastTime = new Date().getTime();
      //正常滑屏时取消动画
      list.style.transition="";
      list.handMove = false;
      pointDisX=0;
      timeDisX=1;//避免出现nan
  });
  navWrap.addEventListener("touchmove",(ev)=>{
      ev=ev||event;
      var touchC=ev.changedTouches[0];

      var touchNowX=touchC.clientX;
      var touchDisX=touchNowX-touchStartX;
      var translateX=eleStartX+touchDisX;
      //css(list,"translateX",eleStartX+touchDisX);

      var nowPoint =touchC.clientX;//当次touchmove手指的位置
      var nowTime=new Date().getTime();

      pointDisX=nowPoint-lastPoint;//当此touchmove距离上一次touchmove 手指移动的距离
      timeDisX=nowTime-lastTime;

      lastPoint=nowPoint;
      lastTime=nowTime;
      // console.log(pointDisX);
      //橡皮筋(pointDisX的有效距离越来越小)
      var scale=1;
      if(translateX>0){
          //右滑 左侧橡皮筋
          //6.true 代表手动橡皮筋效果
          list.handMove = true;
          scale=document.documentElement.clientWidth/((document.documentElement.clientWidth+translateX)*2);
      }else if(translateX<minX){
          //右侧橡皮筋
          list.handMove = true;
          var over=minX-translateX;
          scale=document.documentElement.clientWidth/((document.documentElement.clientWidth + over)*2);
      }


      css(list,"translateX",css(list,"translateX")+pointDisX*scale);
  });
  navWrap.addEventListener("touchend",()=>{
      if (list.handMove){//处于手动橡皮筋效果中的  --> 正常的回到边界位置即可
          //手指抬起时,若有超出部分 需要弹回
          //抬起时 他的位置
          var translateX = css(list,"translateX");
          if(translateX > 0){
              translateX = 0;
          }else if(translateX < minX ){
              translateX = minX;
          }
          //动画
          list.style.transition = ".5s transform";
          css(list,"translateX",translateX);
      }else {
          fast()
      }
      function fast() {//手动橡皮筋效果没有被触发  --> 进行带橡皮筋效果的快速滑屏
          var speed=pointDisX/timeDisX;
          speed=Math.abs(speed)<0.5?0:speed;
          //根据速度让滑屏元素在单位时间内滑动的距离
          //速度大:单位时间内的距离远一些
          //速度小:单位时间内的距离近一些
          var translateX = css(list,"translateX");
          translateX=translateX+speed*200;
          var bsr="";
          if(translateX>0){
              translateX=0;
              bsr = "cubic-bezier(.06,1.85,.83,1.75)";
          }else if(translateX<minX){
              translateX=minX;
              bsr="cubic-bezier(.06,1.85,.83,1.75)";
          }
          list.style.transition=".5s"+(bsr)+" translateX";//" translateX"; 有空格哦!
          css(list,"translateX",translateX);

      }
  });

}