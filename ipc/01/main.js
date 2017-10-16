var child = require('child_process').fork('child.js');
// Open up the server object and send the handle
//
// child_process 搭建集群
//
// 句柄是一种可以用来标识资源的引用，内部包含了指向对象的文件描述符
//
// 请求可以是 parent 处理， 也可以是 child 处理
//
// 子进程对象 send()可发送的句柄类型：
// net.Socket: tcp 套接字
// net.Server: tcp 服务器
// net.Native: C++ 层面的TCP套接字或IPC管道
// dgram.Socket: UDP 套接字
// dgram.Native: C++层面的UDP套接字
//
// 
var server = require('net').createServer();
server.on('connection', function(socket) {
  socket.end('handled by parent\n');
});
server.listen(1337, function() {
  child.send('server', server);
});
