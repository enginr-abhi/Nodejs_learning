const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);
  if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Enter your details</h1>');
  res.write('<form action="/submit-details" method="POST">');
  res.write('<input type="text" name="username" placeholder="Enter your name"/><br>');
  res.write('<label for="male">Male:</label>');
  res.write('<input type="radio" name="gender" id="male" value ="male">');
  res.write('<label for="female">Female:</label>');
  res.write('<input type="radio" name="gender" id="female" value ="female">');
  res.write('<br><button type="submit">Submit</button>');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
  } else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
   fs.writeFileSync('userInfo.txt', 'Abhsihek Thkaur');
   res.statusCode = 302;
   res.setHeader('Location', '/');
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
const PORT = 3999; /// stops events loop
server.listen(PORT, () => {
 console.log(`server is running on address http://localhost:${PORT}`);
})