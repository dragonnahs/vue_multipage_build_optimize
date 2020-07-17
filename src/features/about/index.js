import Vue from 'vue'
import './index.ts'
import App from './app.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
console.log('asfasds')
Vue.use(ElementUI)

new Vue({
  el: '#root',
  template: '<App/>',
  components: { App }
})