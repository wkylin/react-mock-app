const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '^/api',
    proxy({
      target: '//localhost:4001',
      ws: true,
      changeOrigin: true,
    })
  );
};

// package.json
// "proxy": "http://localhost:4001",
