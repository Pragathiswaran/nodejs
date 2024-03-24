import('upper-case').then(uc => {
  const http = require('http');

  http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
  }).listen(8080);
}).catch(err => {
  console.error('Failed to import module:', err);
});
