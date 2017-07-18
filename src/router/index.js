import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from 'components/404/404'
import Main from 'views/MainView'

import Login from 'views/Login/LoginView'

import User from 'views/User/UserView'
import UserInfo from 'views/User/components/UserInfo'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Login }, // Default
    { path: '/main', component: Main },
    {
      path: '/user',
      component: User,
      redirect: '/user/info',
      children: [
        { path: 'info', component: UserInfo }
      ]
    },
    { path: '*', component: NotFound } // Not found
  ]
})
