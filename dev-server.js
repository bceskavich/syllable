"use strict";

var config        = require('config');
var express       = require('express');
var proxy         = require('proxy-middleware');
var request       = require('request');
var url           = require('url');
var webpack       = require('webpack');
var WebpackServer = require('webpack-dev-server');
var WebpackConfig = require('./config/webpack.development.js');
var app           = express();

var PORT     = config.get('devServer.port');
var WP_PORT  = config.get('webpackServer.port');

app.use('/assets', proxy(url.parse('http://localhost:' + WP_PORT + '/assets')));
app.use('/*', function(req, res) {
  request.get('http://localhost:' + WP_PORT + '/assets/index.html').pipe(res);
});

var devServer = new WebpackServer(webpack(WebpackConfig), {
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  publicPath: "http://localhost:" + WP_PORT + "/assets/",
  stats: {
    colors: true
  }
});

devServer.listen(WP_PORT, function(err) {
  if (err) {
    console.log(err);
  }
  console.log("I'll be watching you ... on port " + WP_PORT);
});

app.listen(PORT, function() {
  console.log("It's alive! On port ...\n");
  console.log("----------\n|  " + PORT + "  |\n----------\n       || \n(\\__/) || \n(•ㅅ•) || \n/ 　 づ");
});
