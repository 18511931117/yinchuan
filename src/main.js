// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import './assets/style/global.css'
import store from './store/index'
import "./mock/index"
import "./assets/style/test.less"


import axios from 'axios'
const echarts = require('echarts');
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created(){
    store.commit('addMenu',router)
  },
  components: { App },
  template: '<App/>'
})
