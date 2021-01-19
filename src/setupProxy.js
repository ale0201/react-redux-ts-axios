const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://app-dev-cstest.fzzqxf.com/api/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ''
    },
  }))
};