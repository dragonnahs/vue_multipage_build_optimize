import Vue from 'vue'

import App from './app.vue'

import VueAwsomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwsomeSwiper)


new Vue({
  el: '#root',
  template: '<App/>',
  components: { App }
})