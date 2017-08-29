const net = require('net');

// Domian Soket: connect({ path: '/tmp/echo.sock' });
// telnet 127.0.0.1 8124
var client = net.connect({ port: 8124 }, function () { // connect listener
  console.log('client connected');
  client.write('world!\r\n');
});

client.on('data', function (data) {
  console.log(data.toString());
  // client.end();
});

client.on('end', function () {
  console.log('client disconnect!');
});
