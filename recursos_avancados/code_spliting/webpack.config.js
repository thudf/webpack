const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    test: {
      import: './src/test.js',
      dependOn: 'shared'
    },
    shared: ['lodash', 'jquery']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      $: 'jquery'
    }),
    new HtmlWebpackPlugin({
      title: 'Code Spliting'
    })
  ]
}