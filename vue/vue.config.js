/*
 * @Author: zoubotao
 * @Date: 2021-03-10 09:54:35
 * @LastEditors: zoubotao
 * @LastEditTime: 2021-03-10 10:40:29
 * @FilePath: \qiankun-demo\vue\vue.config.js
 */
const { name } = require('./package');
module.exports = {
  devServer: {
    port: 7100,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
