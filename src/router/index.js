import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signon from '@/views/register/signon'
import login from '@/views/register/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signon',
      name: 'signon',
      component: signon
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
