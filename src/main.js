import Vue from 'vue'
import App from './App.vue'
import './register-service-worker'
import router from './router'
import store from './store'

import '@/assets/scss/main.scss'
import '@/assets/scss/fonts.scss'
import '@/assets/scss/html.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
