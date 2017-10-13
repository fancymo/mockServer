const http = require('http');
// curl -v http://127.0.0.1:3000
const options = {
  // host: 'localhost', 默认
  // localAddress: 建立网络连接的本地网卡
  // socketPath: Domain 套接字路径
  // headers
  // auth: basic 认证，被计算成 Authorization
  hostname: '127.0.0.1',
  port: 3000,
  path: '/',
  method: 'GET'
};
const req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
  console.log(chunk);
  });
});
req.end();
