import Vue from 'vue'
import Router from 'vue-router'
import Note from './views/Note.vue'
import NoteThumb from './views/NoteThumb.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      // component: Welcome
      component: () => import(/* webpackChunkName: "home" */ './views/WelcomeScreen.vue')
    },
    {
      path: '/',
      name: 'home',
      // component: Home
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/note',
      name: 'note',
      component: Note
    },
    {
      path: '/notethumb',
      name: 'notethumb',
      component: NoteThumb
    }
  ]
})
