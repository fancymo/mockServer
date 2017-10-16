const fork = require('child_process').fork;
const cpus = require('os').cpus();

/**
 * 进程间实现通信的方式：命名管道、匿名管道、socket、信号量、共享内存、消息队列、Domain Socket
 * 创建子进程前，会创建IPC通道并监听它，然后才真正创建出子进程，并通过
 * 环境变量（NODE_CHANNEL_FD）告诉子进程这个IPC通道的文件描述符。
 * 子进程在启动的过程中，根据文件描述符连接已存在的IPC通道，完成父子进程间的连接。
 *
 * Windows 下采用 named pipe，*nix 采用 Unix Domain Socket 实现
 * @param  {[type]} let [description]
 * @return {[type]}     [description]
 */
for (let i = 0; i < cpus.length; i++) {
  fork('./worker.js');
}
