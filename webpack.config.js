'use strict';
const path = require('path');
const {TsconfigPathsPlugin} = require( "tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry : './app/ts/index.ts',
  output : {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()]
},
  mode: 'development',
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
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use:{
         loader: 'babel-loader'
        }
      }
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
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./app/views/index.html'
    })
  ]
}