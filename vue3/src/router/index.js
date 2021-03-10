/*
 * @Author: zoubotao
 * @Date: 2021-03-09 17:49:39
 * @LastEditors: zoubotao
 * @LastEditTime: 2021-03-10 11:30:47
 * @FilePath: \qiankun-demo\vue3\src\router\index.js
 */
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default routes
