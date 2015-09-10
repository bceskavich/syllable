var webpack           = require('webpack');
var config            = require('config');
var merge             = require('webpack-config-merger');
var baseConfig        = require('./webpack.base.js');
var patterns          = require('css-patterns');
var path              = require('path');

var WP_PORT = config.get('webpackServer.port');

module.exports = merge(baseConfig, {
  devtool: 'eval',
  debug: true,
  entry: [
      'webpack-dev-server/client?http://localhost:' + WP_PORT,
      'webpack/hot/only-dev-server',
      './src/js/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot',
        exclude: [/node_modules/, /config/]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {stage: 0, plugins: ['./build/babelRelayPlugin']},
        exclude: [/node_modules/, /config/]
      },
      {
        test: /app.scss$/,
        loaders: [
          'style',
          'css',
          'autoprefixer-loader?browsers=last 3 versions',
          'sass?outputStyle=expanded&includePaths[]=' + path.resolve(patterns.includePaths[0])
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
