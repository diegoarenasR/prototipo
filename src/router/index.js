import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Agenda from '@/components/Agenda'
import Control from '@/components/Control'
import Login from '@/Login'
import Menu from '@/menu'

Vue.use(Router)

const Feeds = {template: '<div></div>'};
const Feed = {template: '<div></div>'};
const Biz = {template: '<div><h2>Biz</h2></div>'};
const Foo = {template: '<div><h2>Foo</h2></div>'};
const Bar = {template: '<div><h2>Bar</h2></div>'};
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      children: [

        {
          path: 'agenda',
          component: Agenda
        },
        {
          path: 'bar',
          component: Bar
        },
        {
          path:'control',
          component:Control
        }

      ]
    }
  ]
});
