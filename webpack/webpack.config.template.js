const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin: module_federation } =
  require('webpack').container
const path = require('path')

const dist = path.join(__dirname, 'dist/')
const src = path.join(__dirname, 'src/')

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: dist,
    port: 4002,
  },

  output: {
    publicPath: 'auto',
  },

  output: {
    path: dist,
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:4002/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },

  plugins: [
    new module_federation({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './App11': src + 'App11',
        './App12': src + 'App12',
        './init': src + 'index',
      },
      shared: {
        'react': { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
