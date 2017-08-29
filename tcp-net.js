const net = require('net');

/**
 * 创建 TCP 服务器端接受网络请求
 *
 * 服务器事件
 * listening：调用 server.listen() 绑定端口或者 Domain Socket 后触发
 * connection：每个客户端套接字连接到服务端触发，net.createServer()
 * close：服务器关闭时触发，调用 server.close() 后，服务器停止
 *       接受新的套接字连接，但保持当前连接，等待所有连接都断开后触发该事件
 * error：服务器发生异常，触发该事件，不侦听该事件服务器会抛出异常
 *
 * 连接事件
 * data：当一端调用 write() 发送数据，另一端触发 data
 * end：任一端发送 FIN 数据触发该事件
 * connect：客户端，当套接字与服务器端连接成功触发
 * drain：任意一端调用 write() 发送数据时，当前这端会触发该事件
 * error：当异常发生时，触发该事件
 * close：套接字完全关闭时触发
 * timeout：一定时间后连接不再活跃时，触发，通知用户当前连接已经被闲置了
 */

var server = net.createServer(function (socket) {
  // 新的连接
  socket.on('data', function (data) {
    socket.write('你好');
  });

  socket.on('end', function (data) {
    socket.write('连接断开');
  });

  socket.write('welcome:\n');
});

// $ telnet 127.0.0.1 8124
server.listen(8124, function () {
  console.log('server bound');
})

// Domain Socket
// $ nc -U /tmp/echo.sock
// server.listen('/tmp/echo.sock');
