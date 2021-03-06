import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name : 'posts',
      component: () => import(/* webpackChunkName: "about" */ './views/Posts.vue'),
        children :[
          {path: 'post/:id',
          name: 'post',
          component: () => import(/* webpackChunkName: "about" */ './views/Post.vue'),}
        ]

    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
