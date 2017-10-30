// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

import 'owlcarousel-pre/owl-carousel/owl.carousel.min.js'
import 'counterup/jquery.counterup.min.js'
import 'jquery-validation/dist/jquery.validate.min.js'
import 'animsition/dist/js/animsition.min.js'
import 'countdown/countdown.js'
import 'jquery.easing/bower_components/jquery-easing-original/jquery.easing.min.js'
import 'waypoints/lib/jquery.waypoints.min.js'
import './assets/js/custom.js'
import './assets/js/menu.js'

import 'owlcarousel-pre/owl-carousel/owl.carousel.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(VueAnalytics, {
  id: 'UA-76648418-6',
  router
})
