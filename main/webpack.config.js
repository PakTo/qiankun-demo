/*
 * @Author: zoubotao
 * @Date: 2021-03-10 10:00:30
 * @LastEditors: zoubotao
 * @LastEditTime: 2021-03-10 11:19:27
 * @FilePath: \qiankun-demo\main\webpack.config.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  output: { publicPath: '/' },
  mode: 'development',
  devServer: {
    port: 7099,
    open: true,
    disableHostCheck: true,
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    overlay: { warnings: false, errors: true },
  },
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  module: { rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }] },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
