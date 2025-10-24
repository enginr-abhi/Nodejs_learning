  const sumHandler = require('./sumHandler');
  const requestHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/' && req.method === 'GET'){
  res.setHeader('Content-Type' , 'text/html');
  res.write('<h1>Welocome to Home page</h1>');
  res.write('<a href = "/calculator" >Go to calculator page</a>')
  return res.end();
  }
  else if(req.url === '/calculator' && req.method === 'GET'){
    res.setHeader('Content-Type' , 'text/html');
    res.write(`<form action="/calculate-result" method="POST">
    <input type="text" name="firstNum" id="firstNum" placeholder="Enter a first Number">
    <input type="text" name="secondNum" id="secondNum" placeholder="Enter a Seond Number">
    <input type="submit" value="submit">
  </form>`)
  return res.end();
  }

  else if(req.url === '/calculate-result' && req.method === 'POST'){
   return sumHandler(req, res);
  }
  else {
    res.setHeader('Content-Type' , 'text/html');
    res.statusCode = 404;
    res.write('<h1>404 - Page Not Found </h1>');
  }
}
exports.requestHandler = requestHandler;