const http = require('http');
const url = require('url');
const routes = require('./routes');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const routeHandler = routes[parsedUrl.pathname];
  debugger
  if (routeHandler) {
    if (routeHandler[req.method]) {
      routeHandler[req.method](req, res);
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('405 Method Not Allowed');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
