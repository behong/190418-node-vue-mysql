import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import lodash from 'lodash'

import Global from './components/_global'
import {utils } from '@/mixins/utils'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.ApiURL = "http://localhost:7000/apis/"
Vue.prototype._ = lodash

const EventBus = new Vue({
  methods:{
  }
})

Vue.prototype.EventBus = EventBus

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
