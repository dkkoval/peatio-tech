import Vue from 'vue'
import Router from 'vue-router'

const landing = {
  template: require('@/views/landing.html')
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: landing
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
