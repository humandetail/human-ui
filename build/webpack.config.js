/*
 * @FilePath: /human-ui/build/webpack.config.js
 * @Description: Webpack config
 * @Author: humandetail
 * @Date: 2021-01-24 15:48:09
 * @LastEditors: humandetail
 * @LastEditTime: 2021-01-24 17:45:33
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',

  entry: './template/index.ts',

  output: {
    filename: 'template.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue'],

    alias: {
      'vue': '@vue/runtime-dom'
    }
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },

      {
        test: /\.vue$/,
        use: 'vue-loader'
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  devtool: process.env.NODE_ENV === 'production'
    ? false
    : 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')]
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template/index.html')
    }),

    new VueLoaderPlugin()
  ]
};