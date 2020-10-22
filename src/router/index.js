import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cont from '@/components/Cont'
import lohe from '@/components/lohe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: lohe
    },
    {
      path: '/11',
      name: 'cont',
      component: Cont
    }
  ]
})
