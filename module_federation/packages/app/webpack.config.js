const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9001/'
  },
  mode: "development",
  devServer: {
    static: {
      directory : path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: true, // specify to enable root proxying
    },
    port: 9001,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'App'
    }),
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        HomeApp: 'HomeApp@http://localhost:9002/remoteEntry.js',
        ContactApp: 'ContactApp@http://localhost:9003/remoteEntry.js'
      }
    })
  ]
}
