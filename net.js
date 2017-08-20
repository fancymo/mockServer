const net = require('net');

// 创建 TCP 服务器端接受网络请求
var server = net.createServer(function (socket) {
  // 新的连接
  socket.on('data', function (data) {
    console.log(data.toString());
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
