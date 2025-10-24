const http = require('http');
const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  if(req.url === '/'){
  res.write('<h1>Welocome to Home</h1>');
  return res.end();
  }else if(req.url.toLocaleUpperCase() === '/products'){
  res.write('<h1>Welocome to Products</h1>');
  return res.end();
  }
  res.write('<body><h1>Like/Share/Subscribe</h1></body>');
  res.write('</html>');
  return res.end();
  // process.exit();
});
const PORT = 3000;
server.listen(PORT, () => {
 console.log(`server is running on address http://localhost:${PORT}`);
})