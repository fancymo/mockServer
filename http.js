const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;


/**
 * HTTP 基于请求响应式，事件驱动，实现高并发
 *
 * 从协议的角度，现在的应用，如浏览器，其实是一个 HTTP 代理，
 * 用户的行为通过它转化为 HTTP 请求报文发送给服务器端，代理解析报文后将用户需要的内容呈现在界面上。
 *
 * 服务器是 EventEmitter 的实例
 * connection: 开始 HTTP 请求和响应前，客户端和服务端需要建立底层的 TCP 连接，
 *             可能开启了 keep-alive，可以在多个请求响应中使用。
 * request: 建立 TCP 连接后，当请求数据发送到服务端，解析出 HTTP 请求头触发该事件。
 * close: 与 TCP 的行为一致。调用 server.close() 停止接收新的连接，当已有连接都断开，触发该事件。
 * checkContinue: 客户端发送较大数据，不会将数据直接发送，先发送头部带 Expect: 100-continue 的请求到服务器，
 *                服务器触发 checkContinue 事件。
 * connect: 客户端发起 connect 请求时触发，通常在 HTTP 代理时出现。
 * upgrade: 客户端在请求头上带上 Upgrade 字段，要求升级连接的协议。如果不监听该事件，发起请求的连接会关闭。
 * clientError: 连接的客户端触发 error，错误传到服务端。
 */

/* 判断是否有 body */
const hasBody = (req) => {
  return 'transfer-encoding' in req.headers || 'content-length' in req.headers;
};

/* 获取 minetype 类型 */
const mime = (req) => {
  const str = req.headers['content-type'] || '';
  return str.split(';')[0];
};

const handle = (req, res) => {
  // if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    // req.body = querystring.parse(req.rawBody);
    // console.log(querystring);
  // }
  // todo(req, res);
};

const server = http.createServer((req, res) => {
  if (hasBody(req)) {
    console.log('type********', req.headers);
    if (mime(req) === 'application/x-www-form-urlencoded') {
    //   const buffers = [];
    //   req.on('data', (chunk) => {
    //     buffers.push(chunk);
    //   });
    //   req.on('end', () => {
    //     // key=value&key2=value2
    //     req.rawBody = Buffer.concat(buffers).toString();
    //     console.log('end', buffers, req.rawBody);
    //     handle(req, res);
    //   });
    // } else if (mime(req) === 'application/json') {
      const chunks = [];
      let size = 0;
      req.on('data', (chunk) => {
        chunks.push(chunk);
        size += chunk.length;
      });

      req.on('end', () => {
        const buffer = Buffer.concat(chunks, size);
        if (!size) {
          res.writeHead(404);
          res.end('');
          return;
        }
        console.log(buffer);
        const rems = [];

        //根据\r\n分离数据和报头
        for (let i = 0; i < buffer.length; i++) {
          const v = buffer[i];
          const v2 = buffer[i + 1];
          if (v === 13 && v2 === 10) {
            rems.push(i);
          }
        }

        // 文件信息
        const filemsg = buffer.slice(rems[0] + 2,rems[1]).toString();
        const filename = filemsg.match(/filename=".*"/g)[0].split('"')[1];
        console.log(filemsg, filename);
        // 文件内容
        const nbuf = buffer.slice(rems[3] + 2,rems[rems.length-2]);

        const path = './databox/' + filename;
        fs.writeFileSync(path, nbuf);
      });
    }
  } else {
    handle(req, res);
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world!');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
