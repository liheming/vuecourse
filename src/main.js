// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import {routerMode} from './config/env'
import VueRouter from 'vue-router'
import routes from './router/router'


Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
})
new Vue({
  router
}).$mount('#app')
