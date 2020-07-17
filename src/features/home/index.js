import Vue from 'vue'

import App from './app.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
console.log('111')
new Vue({
  el: '#root',
  template: '<App/>',
  components: { App }
})