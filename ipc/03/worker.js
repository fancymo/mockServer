// worker.js
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('handled by child, pid is ' + process.pid + '\n');
  throw new Error('throw exception');
});
var worker;
process.on('message', (m, tcp) => {
  if (m === 'server') {
    worker = tcp;
    worker.on('connection', (socket) => {
      server.emit('connection', socket);
    });
  }
});

// 未知 bug
process.on('uncaughtException', (err) => {
  // 记录日志
  logger.error(err);

  // 发送自杀信号
  process.send({ act: 'suicide' });

  // 停止接收新的连接
  worker.close(function() {
    // 所有已有连接断开后，退出进程
    console.log('process exit', process.pid);
    process.exit(1);
  });

  // 长连接，等待长连接断开可能需要较长的时间，为已有连接的断开设置一个超时时间是有必要的
  setTimeout(function () {
    process.exit(1);
  }, 5000);
});
