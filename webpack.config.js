'use strict';
const path = require('path');
const HtnlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : './app/ts/index.ts',
  output : {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
 // devtool: 'inline-source-map',
  //devtool: 'inline-source-map',
  devServer:{
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }, 
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./app/views/indexhtml'
    })
  ]
}