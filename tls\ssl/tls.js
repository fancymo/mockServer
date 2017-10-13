const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.crt'),
  requestCert: true,
  ca: [fs.readFileSync('./keys/ca.crt')]
};

const server = tls.createServer(options, (stream) => {
  console.log(stream);
  console.log('server connected', stream.authorized ? 'authorized' : 'unauthorized');
  stream.write('welcome!\n');
  stream.setEncoding('utf8');
  stream.pipe(stream);
});

server.listen(8000, function() {
  console.log('server bound');
});
