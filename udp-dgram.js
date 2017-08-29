var dgram = require('dgram');

// UDP 套接字
// var socket = dgram.createSocket('udp4');

/**
 * 创建 UDP 服务器端接受网络请求，只是 EventEmitter 的实例
 * message: UDP 套接字侦听网卡端口后，接收到消息时触发该事件，触发携带的数据为消息 buffer 对象和一个远程地址信息。
 * listening: UDP 套接字开始侦听时触发该事件。
 * close: 调用 close() 时触发
 * error: 异常，如不侦听，抛出异常，直接退出
 * 服务器事件
 */
var server = dgram.createSocket('udp4');

server.on("message", function (msg, rinfo) {
  console.log("server got: " + msg + " from " +
  rinfo.address + ":" + rinfo.port);
});
server.on("listening", function () {
  var address = server.address();
  console.log("server listening " + address.address + ":" + address.port);
});
server.bind(41234);
