<template>
  <div id="app">
   <v-header :seller="seller"></v-header>
   <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>
<script>
import  VHeader from 'components/v-header/v-header'
import tab from 'components/tab/tab'

import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
// 导入封装接口模块api
import { getSeller } from 'api'
export default{
  data(){
    return{
      seller:{}
    }
  },
  created(){
    this._getSeller()
  },
  computed: {
      tabs() {
        return [
          {
            label: '商品',
            component: Goods,
            data: {
              seller: this.seller
            }
          },
          {
            label: '评论',
            component: Ratings,
            data: {
              seller: this.seller
            }
          },
          {
            label: '商家',
            component: Seller,
            data: {
              seller: this.seller
            }
          }
        ]
      }
  },
  methods:{
   _getSeller(){
    getSeller().then((seller)=>{
      this.seller = seller
      console.log(seller)
    })
   }
  },
  components:{
      VHeader,
      tab
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
    .tab-wrapper
       position:fixed
       top:136px
       left:0
       right:0
       bottom:0
</style>
