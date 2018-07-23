import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import comics from '@/components/comics'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/comics/:id',
      name: 'comics',
      component: comics
    }
  ]
})
