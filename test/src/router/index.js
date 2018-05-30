import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import list from '@/components/list'
import detail from '@/components/detail'
import notfound from '@/components/notfound'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '*',
      component: notfound
    }
  ]
})

export default router
