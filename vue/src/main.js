/*
 * @Author: zoubotao
 * @Date: 2021-03-09 17:47:30
 * @LastEditors: zoubotao
 * @LastEditTime: 2021-03-10 11:11:27
 * @FilePath: \qiankun-demo\vue\src\main.js
 */
import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.use(VueRouter);

Vue.config.productionTip = false;

let router = null,
  instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({ router, store, render: h => h(App) }).$mount(
    container ? container.querySelector('#app') : '#app'
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
