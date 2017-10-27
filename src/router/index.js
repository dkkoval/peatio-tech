import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: {
        template: require('@/views/landing.html')
      }
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
