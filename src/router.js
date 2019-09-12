import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: r => require(['./views/Home.vue'], r)
    }, {
      path: '/about',
      name: 'about',
      component: r => require(['./views/About.vue'], r)
    }, {
      path: '/test',
      name: 'test',
      component: r => require(['./views/Test.vue'], r)
    }
  ]
})
