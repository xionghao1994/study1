<template>
  <div id="app">
   <v-header></v-header>
  </div>
</template>
<script>
import  VHeader from 'components/v-header/v-header'
export default{
  created(){
    this._getSeller()
  },
  methods:{
   _getSeller(){
    
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
