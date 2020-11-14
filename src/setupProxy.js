const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
	
  app.use(
    createProxyMiddleware(
    '/api/auth',{
      target: 'http://localhost/openemr/apidsadsss',
      changeOrigin: true,
    })
  );
};