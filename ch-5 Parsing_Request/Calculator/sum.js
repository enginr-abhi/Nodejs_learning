const sumHandler = (req, res) => {
  console.log(req.url, req.method);
  const body = [];
  let result;
  console.log(body);
  req.on('data',(chunk) => {
  body.push(chunk);
})
req.on('end',()=>{
  const fullBody = Buffer.concat(body).toString();
  const params = new URLSearchParams(fullBody);
  const bodyObj = Object.fromEntries(params);
  console.log(bodyObj);
  console.log(Number(bodyObj.firstNum));
  console.log(Number(bodyObj.secondNum));
  result = Number(bodyObj.firstNum) + Number(bodyObj.secondNum);
  res.setHeader('Content-Type','text/html');
  res.write(`<h1>SUM of two Numbers is ${result}</h1>`);
  return res.end();
})
}

exports.sumHandler = sumHandler;