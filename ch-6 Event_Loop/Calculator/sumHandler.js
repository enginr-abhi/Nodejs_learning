const fs = require('fs');
const sumHandler = (req, res) => {
    let body = [];
    let result;
    req.on('data', (chunk)=>{
      console.log(chunk);
      body.push(chunk);
      console.log("Chunk")
    })

    req.on('end',()=>{
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    result = Number(bodyObject.firstNum) + Number(bodyObject.secondNum);
    console.log("Result:", result);
    const resultStr = result.toString();
    console.log(resultStr);
    fs.writeFileSync('practise.txt', resultStr);
    res.setHeader('Content-Type' , 'text/html');
    res.write(`<h1>The Sum of Two Numbers is ${result}</h1>`);
    res.write('<a href="/calculator">Go back</a>');
    return res.end();
    })
}
module.exports = sumHandler;