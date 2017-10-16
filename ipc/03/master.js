var fork = require('child_process').fork;
var cpus = require('os').cpus();
var server = require('net').createServer();
server.listen(1337);

var workers = {};
var limit = 10;
var during = 1000;
var restart = [];
// 时间单位
//
var isTooFrequently = function () {
  // 记录重启时间
  var time = Date.now();
  var length = restart.push(time);
  if (length > limit) {
  // 取出最后 10 个记录
  restart = restart.slice(limit * -1);
  }
  // 最后一次重启到前 10 次重启之间的时间间隔
  return restart.length >= limit && restart[restart.length - 1] - restart[0] < during;
};

var createWorker = function() {
  // 检查是否太过频繁
  if (isTooFrequently()) {
    // 触发 giveup 事件后，不再重启。比 uncaughtException 更严重的异常事件，要为 giveup 事件添加日志
    process.emit('giveup', length, during);
    return;
  }

  var worker = fork(__dirname + '/worker.js');

  // 收到自杀信号，重启工作进程
  worker.on('message', function(message) {
    if (message.act === 'suicide') {
      createWorker();
    }
  });

  // 退出时重新启动新的进程
  worker.on('exit', function() {
    console.log('Worker ' + worker.pid + ' exited.');
    delete workers[worker.pid];
    createWorker();
  });
  // 句柄转发
  worker.send('server', server);
  workers[worker.pid] = worker;
  console.log('Create worker. pid: ' + worker.pid);
};
for (var i = 0; i < cpus.length; i++) {
  createWorker();
}
// 进程自己退出时，让所有工作进程退出
process.on('exit', function() {
  for (var pid in workers) {
    console.log('master exit', pid);
    workers[pid].kill();
  }
});
