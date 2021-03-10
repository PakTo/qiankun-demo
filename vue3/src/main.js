/*
 * @Author: zoubotao
 * @Date: 2021-03-09 17:49:39
 * @LastEditors: zoubotao
 * @LastEditTime: 2021-03-10 11:32:45
 * @FilePath: \qiankun-demo\vue3\src\main.js
 */
import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

let router = null,
  instance = null;
function render(props = {}) {
  const { container } = props;
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue3/' : '/'),
    mode: 'history',
    routes,
  });

  instance = createApp(App);

  instance
    .use(store)
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
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
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
}
