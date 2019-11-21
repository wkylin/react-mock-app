const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  // app.use('/api', proxy({ target: 'http://localhost:40001', changeOrigin: true, })); // 官网的配置是错的
  app.use(
    proxy('/api', {
      target: 'http://localhost:4001',
      ws: false,
      changeOrigin: true,
    }),
  );
  app.use(
    proxy('/user', {
      target: 'http://localhost:4005',
      ws: false,
      changeOrigin: true,
    }),
  );
};

// package.json 访问接口
// "proxy": "http://localhost:4001",
// "proxy":"https://dev.ai",
