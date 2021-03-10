/*
 * @Author: zoubotao
 * @Date: 2021-03-09 17:42:48
 * @LastEditors: zoubotao
 * @LastEditTime: 2021-03-10 10:57:39
 * @FilePath: \qiankun-demo\main\index.js
 */
import 'minireset.css';
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue app',
    entry: '//localhost:7100',
    container: '#app',
    activeRule: '/vue',
  },
  {
    name: 'vue3 app',
    entry: '//localhost:7101',
    container: '#app',
    activeRule: '/vue3',
  },
]);

start();
