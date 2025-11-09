//core module
// const http = require("http");
//External module
const express = require('express');
const app = express();
// local module
// const userRequestHandler = require('./user');
const requestHandler = require("./user");
const bodyParser = require('body-parser')
const PORT = 3002;

app.use("/", (req, res, next)=>{
  console.log('Came in first middleware', req.url, req.method);
  // res.send('<p>Come from first middleware</p>');
  next();
})
app.use(requestHandler);
app.use("/", (req, res, next)=>{
  console.log('Came in second middleware', req.url, req.method);
  res.send('<p>Come from second middleware</p>');
})

app.post("/submit-details", (req, res, next)=>{
  console.log('Came in fourth middleware', req.url, req.method);
  res.send('<p>Welocme to Complet Coding Nodejs series</p>');
})

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

// app.get("/", (req, res, next) => {
//  console.log('Came in first middleware', req.url, req.method);
// //  res.send('<p>Came from First Middleware</p>')
//  next();
// })

// app.post("/submit-details", (req, res, next) => {
//  console.log('Came in Second middleware', req.url, req.method);
//  res.send('<p>Welcome to Complete Coding</p>');
// })

// app.use("/", (req, res, next) => {
//  console.log('Came in another middleware', req.url, req.method);
//  res.send('<p>Came from another Middleware</p>')
// })

// const server = http.createServer(app);

