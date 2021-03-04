import './register-service-worker'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters/date.filter'
import './filters/phone.filter'

import '@/assets/scss/main.scss'
import '@/assets/scss/fonts.scss'
import '@/assets/scss/html.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
