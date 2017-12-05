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

    // 通过代理，主进程对外监听所有的网络请求，再将请求分别代理到不同的进程，
    // 可以解决端口不能重复监听的问题，也能在代理进程上做适当的负载均衡；
    // 进程接收到一个链接，会用掉一个文件描述符，因此客户端连接到代理进程，代理进程连接到工作进程，
    // 需要用掉两个文件描述符，操作系统的文件描述符是有限的。
    // V0.5.9 引入进程间发送句柄的功能，句柄是用来标识资源的引用，内部包含指向对象的文件描述符；
    // 可以去掉代理方案，使主线程接收到 socket 请求后，将 socket 直接发送给工作进程。
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
