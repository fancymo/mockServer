process.on('message', function(m, server) {
  if (m === 'server') {
    server.on('connection', function(socket) {
      socket.end('handled by child,' + 'pid is ' + process.pid + '\n');
    });
  }
});

// SIGTERM: 进程中止信号
process.on('SIGTERM', function() {
 console.log('Got a SIGTERM, exiting...');
 process.exit(1);
});
