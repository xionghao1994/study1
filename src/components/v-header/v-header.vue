<template>
<div class="container">
   <div class="head">
      <div class="left"><img :src="seller.avatar"/></div>
      <div class="right">
        <div class="title">
           <span class="brand"></span>
           <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <!--接口嵌套比较深的情况下建议用v-if否则报错undefined -->
        <div v-if="seller.supports" class="text">
          <span class="brand2"></span>
          <span class="message">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="banner" @click="show">
    <span class="brand"></span>
    {{seller.bulletin}}
    <i class="icon-keyboard_arrow_right"></i>
   </div>
   <transition name="fade">
     <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
          <!--  <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div> -->
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
         <!--   <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,index) in seller.supports">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul> -->
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
     </div>
   </transition>
</div>
</template>
<script>
export default{
 props:{
    seller:{
       type:Object,
       default(){
          return{}
       }
    }
 },
 data(){
   return{
      detailShow:false
   }
 },
 methods:{
    show(){
      this.detailShow = true;
    },
    hideDetail(){
      this.detailShow = false;
    }
 }
}
</script>
<style>
.head{
   padding: 24px 12px 18px 24px;
   background-color: rgba(7,17,27,0.5); 
   position:relative;
}
/*背景图片模糊*/
.head:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    background:transparent url('http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg') center center no-repeat;
    filter:blur(5px);
    z-index:-1;
    background-size:cover;
    width:100%;
    height:110px;
}
.left{
    display:inline-block;
    vertical-align:top;
}
.left img{
    border-radius:2px;
    width:64px;
    height:64px;
}
.right{
     display:inline-block;
     margin-left:12px;
}
.right .name{
    margin-left:6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
    color:#fff;
}
.right .brand{
    width:30px;
    height:18px;
    background:url('../../assets/brand.png')no-repeat;
    background-size:30px 18px;
    display:inline-block;
    vertical-align:top;
}
.description{
    line-height: 12px;
    font-size: 12px;
    color:#fff;
    margin-top:10px;
}
.text{
   margin-top:6px;
}
.text .brand2{
    width:12px;
    height:12px;
    background:url('../../assets/decrease.png')no-repeat;
    background-size:12px 12px;
    display:inline-block;
    vertical-align:middle;
}
.text .message{
    line-height: 12px;
    font-size: 12px;
    color:#fff;
}
.banner{
    font-size:12px;
    color:#fff;
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 38px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color:#333;
}
.banner i{
   position:absolute;
   color:#fff;
   right:3px;
   top:3px;
   font-size:25px;
}
.banner .brand{
    width:22px;
    height:12px;
    background:url('../../assets/bulletin.png') no-repeat;
    background-size:22px 12px;
    display:inline-block;
    position:absolute;
    left:8px;
    top:7px;
}
/* detailShow详情页*/
.detail{
   position: fixed;
   z-index: 100;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: auto;
   backdrop-filter: blur(10px);
   opacity: 1;
   color:#fff;
   background: rgba(7, 17, 27, 0.8);
}
.detail.fade-enter-active, .detail.fade-leave-active{
    transition: all 0.5s
}
.detail.fade-enter, .detail.fade-leave-active{
   opacity: 0;
   background: rgba(7, 17, 27, 0);
}
.detail-wrapper{
   width: 100%;
   min-height: 100%;
}
.detail-main{
   margin-top: 64px;
   padding-bottom: 64px;
}
.detail-main .name{
   line-height: 16px;
   text-align: center;
   font-size: 16px;
   font-weight: 700;
}
.detail-main .title{
   display: flex;
   width: 80%;
   margin: 28px auto 24px auto;
}
.detail-main .title .line{
   flex: 1;
   position: relative;
   top: -6px;
   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.detail-main .title .text{
   padding: 0 12px;
   font-weight: 700;
   font-size: 14px;
}
.bulletin{
   width: 80%;
   margin: 0 auto;
}
.content{
   padding: 0 12px;
   line-height: 24px;
   font-size: 12px;
}
.detail-close{
   position: relative;
   width: 32px;
   height: 32px;
   margin: -110px auto 0 auto;
   clear: both;
   font-size: 32px;
}

</style>