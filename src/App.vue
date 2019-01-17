<template>
  <div id="app">
   <v-header :seller="seller"></v-header>
  </div>
</template>
<script>
import  VHeader from 'components/v-header/v-header'
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
  methods:{
   _getSeller(){
    getSeller().then((seller)=>{
      this.seller = seller
      console.log(seller)
    })
   }
  },
  components:{
      VHeader
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
