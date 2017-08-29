const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


/**
 * HTTP 基于请求响应式，事件驱动，实现高并发
 *
 * 从协议的角度，现在的应用，如浏览器，其实是一个 HTTP 代理，
 * 用户的行为通过它转化为 HTTP 请求报文发送给服务器端，代理解析报文后将用户需要的内容呈现在界面上。
 *
 * 服务器是 EventEmitter 的实例
 * connection: 开始 HTTP 请求和响应前，客户端和服务端需要建立底层的 TCP 连接，
 *             可能开启了 keep-alive，可以在多个请求响应中使用。
 * request: 建立 TCP 连接后，当请求数据发送到服务端，解析出 HTTP 请求头触发该事件。
 * close: 与 TCP 的行为一致。调用 server.close() 停止接收新的连接，当已有连接都断开，触发该事件。
 * checkContinue: 客户端发送较大数据，不会将数据直接发送，先发送头部带 Expect: 100-continue 的请求到服务器，
 *                服务器触发 checkContinue 事件。
 * connect: 客户端发起 connect 请求时触发，通常在 HTTP 代理时出现。
 * upgrade: 客户端在请求头上带上 Upgrade 字段，要求升级连接的协议。如果不监听该事件，发起请求的连接会关闭。
 * clientError: 连接的客户端触发 error，错误传到服务端。
 */

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world!');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
