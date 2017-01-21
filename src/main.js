// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAnalytics from 'vue-ua'

import router from './router'
import parameters from '../parameters.json'
import packageInfo from '../package.json'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAnalytics, {
  appName: packageInfo.name,
  appVersion: packageInfo.version,
  trackingId: parameters['ga-code'],
  debug: true,
  vueRouter: router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
