
const fs = require('fs');
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Enter Your Details:</h1></body>')
  res.write('<form action="/submit-details" method="POST">');
  res.write('<label for ="name">Name:</label>')
  res.write('<input type = "text" name = "username" id="name" placeholder = "Enter your name"><br>');
  res.write('<label for ="gender">Gender:</label>')
  res.write('<label for ="male">Male:</label>')
  res.write('<input type ="radio" id="male" name="gender" value="male">')
  res.write('<label for ="female">Female:</label>')
  res.write('<input type ="radio" id="female" name="gender" value="female">')
    res.write('<label for ="female">Other:</label>')
  res.write('<input type ="radio" id="other" name="gender" value="other"><br>')
  res.write('<button type="submit">Submit</button>')
  res.write('</form>');
  res.write('</html>');
  return res.end();
  }
  else if(req.url.toLowerCase() === '/submit-details' && req.method == "POST"){
    const body = [];
    req.on('data', (chunk)=>{
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end', () =>{
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
     const params =  new URLSearchParams(fullBody);
     console.log(params);
    //  const bodyObject = {};
    //  for(const [key, value] of params.entries()){
    //   bodyObject[key] = value;
    //   console.log(`${key} : ${value}`);
    //  }
    //  console.log(bodyObject);
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
      fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
    })
  //   const body = [];
  // req.on('data',(chunk)=>{
  //   console.log(chunk);
  //   body.push(chunk);
  //   })
  //   req.on('end', () => {
  //   const fullbody = Buffer.concat(body).toString();
  //   console.log(fullbody);
  //   const params = new URLSearchParams(fullbody);
  //   // const bodyObject = {};
  //   // for(const [key, value] of params.entries()){
  //   // bodyObject[key] = value
  //   // }
  //   // console.log(bodyObject);
  //   const bodyObject = Object.fromEntries(params);
  //   console.log(bodyObject);
  //   fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
  //   })
  
  res.statusCode = 302;
  res.setHeader('Location', '/')
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like/Share/Subscribe</h1></body>');
  res.write('</html>');
  return res.end();
};
module.exports = userRequestHandler;

