var path = require('path');

module.exports = {
  env: (process.env.NODE_ENV || 'development'),
  graphQLServer: {
    port: 3000
  },
  webpackServer: {
    port: 8888
  },
  server: {
    port: 5000
  },
  webpack: {
    output: {
      path: path.join(__dirname, '../public/assets'),
      htmlPath: 'index.html'
    }
  },
  analytics: {
    ga: null
  }
};
