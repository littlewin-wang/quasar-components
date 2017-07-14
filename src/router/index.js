import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from 'components/404/404'
import Login from 'views/LoginView'
import Main from 'views/MainView'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Login }, // Default
    { path: '/main', component: Main },
    { path: '*', component: NotFound } // Not found
  ]
})
