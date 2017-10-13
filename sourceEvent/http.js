const http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  setInterval(function() {
    res.write('data: ' + +new Date() + '\n\n');
  }, 1000);
}).listen(8888);
