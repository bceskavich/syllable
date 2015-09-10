import config from 'config';
import express from 'express';
import graphQlHTTP from 'express-graphql';
import proxy from 'proxy-middleware';
import request from 'request';
import url from 'url';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import WebpackDevConfig from './config/webpack.development';
// import { schema } from './data/schema';

const APP_PORT = config.get('server.port');
const GRAPHQL_PORT = config.get('graphQLServer.port');
const WEBPACK_PORT = config.get('webpackServer.port');

/*
// A) GraphQL Server
let graphQLServer = express();
graphQLServer.use('/', graphQlHTTP({schema, pretty: true}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is alive on port: ${GRAPHQL_PORT}`
));
*/

// B) App server
let app = express();
app.use('/assets', proxy(url.parse(`http://localhost:${WEBPACK_PORT}/assets`)));
app.use('/', (req, res) => {
  request.get(`http://localhost:${WEBPACK_PORT}/assets/index.html`).pipe(res);
});

app.listen(APP_PORT, () => {
  console.log('It\'s alive! On port ...\n');
  console.log(`----------\n|  ${APP_PORT}  |\n----------\n       || \n(\\__/) || \n(•ㅅ•) || \n/ 　 づ`);
});

// C) Webpack
let devServer = new WebpackDevServer(webpack(WebpackDevConfig), {
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  publicPath: `http://localhost:${WEBPACK_PORT}/assets`,
  stats: {
    colors: true
  }
});

devServer.listen(WEBPACK_PORT, () => console.log(
  `I'll be watching you, on port: ${WEBPACK_PORT}`
));
