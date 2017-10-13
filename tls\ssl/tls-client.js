const tls = require('tls');
const fs = require('fs');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const options = {
  key: fs.readFileSync('./keys/client.key'),
  cert: fs.readFileSync('./keys/client.crt'),
  ca: [fs.readFileSync('./keys/ca.crt')]
};

const stream = tls.connect(8000, options, function () {
  console.log('s', stream);
  console.log('client connected', stream.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(stream);
});
stream.setEncoding('utf8');
stream.on('data', function(data) {
 console.log(data);
});
stream.on('end', function() {
  server.close();
});
