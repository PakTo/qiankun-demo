/*
 * @Author: zoubotao
 * @Date: 2021-03-09 17:47:30
 * @LastEditors: zoubotao
 * @LastEditTime: 2021-03-10 09:49:09
 * @FilePath: \qiankun-demo\vue\src\router\index.js
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
