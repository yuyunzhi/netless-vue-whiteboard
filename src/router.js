import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import ReplayPage from './views/ReplayPage'
import Whiteboard from './views/Whiteboard'
import WhiteboardCreatorPage from './views/WhiteboardCreatorPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    },
    {
      path: '/whiteboard/:identity/:uuid?/',
      name: 'WhiteboardCreatorPage',
      component: WhiteboardCreatorPage
    },
    {
        path: '/whiteboard', // :identity/:uuid/:userId/',
        name: 'Whiteboard',
        component: Whiteboard
    },
    {
      path: '/replay/:uuid/:userId/:startTime?/:endTime?/:mediaUrl?/',
      name: 'ReplayPage',
      component: ReplayPage,
    },
  ]
})
