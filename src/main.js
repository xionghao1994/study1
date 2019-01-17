import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'

// import axios from 'axios';
// baseURL基地址
// axios.defaults.baseURL = "http://localhost:8080/api/";
// 让所有的Vue实例都共享axios
// Vue.prototype.$http =axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
