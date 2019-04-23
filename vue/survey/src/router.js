import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/survey/:id',
      name: 'survey',
      component: () => import( './views/Survey')
    },        
    {
      path: '/adm',
      name: 'adm',
      component: () => import( './views/Adm')
    },    

    {
      path: '/surveylist',
      name: 'surveylist',
      component: () => import( './views/SurveyList'),
      children:[
        {
          path: '/surveylist/surveyedit/:id',
          name: 'surveyedit',
          component: () => import( './views/SurveyEdit')
        }
      ]
    },        

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
