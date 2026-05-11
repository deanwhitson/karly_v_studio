const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = req.url === '/' ? 'index.html' : req.url.slice(1);
  const ext = filePath.endsWith('.html') ? 'text/html' : 'application/octet-stream';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error');
      return;
    }
    
    res.writeHead(200, { 'Content-Type': ext });
    res.end(data);
  });
});

server.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
