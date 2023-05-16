const http = require('node:http');

const host = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // --- several ways to handle the origin ---
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5050');
  // OR
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // OR
  const allowedOrigins = [
    'http://localhost:5050',
    'http://localhost:8020',
    'http://example.com',
    'https://example.com'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // ------

  res.end('Hello from the server!');
});

server.listen(port, host, () => {
  console.log(`🚀 Server is running @ http://${host}:${port}`);
});
