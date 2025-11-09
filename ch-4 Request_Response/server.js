const http = require('http');
const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to Home</h1></body>');
  res.write('</html>');
  return res.end();
  }
  else if(req.url === '/products'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Check out this product</h1></body>');
  res.write('</html>');
  return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like/Share/Subscribe</h1></body>');
  res.write('</html>');
  res.end();
  // process.exit();
});
const PORT = 30001; /// stops events loop
server.listen(PORT, () => {
 console.log(`server is running on address http://localhost:${PORT}`);
})