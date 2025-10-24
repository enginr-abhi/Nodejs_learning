// //core module
// const http = require("http");
//External module
const express = require('express');
const bodyParser = require('body-parser')
const PORT = 3002;
const app = express();

app.get("/", (req, res, next) => {
 console.log('Came in first middleware', req.url, req.method);
//  res.send('<p>Came from First Middleware</p>')
 next();
})

app.post("/submit-details", (req, res, next) => {
 console.log('Came in Second middleware', req.url, req.method);
 res.send('<p>Welcome to Complete Coding</p>');
})

app.use("/", (req, res, next) => {
 console.log('Came in another middleware', req.url, req.method);
 res.send('<p>Came from another Middleware</p>')
})

// const server = http.createServer(app);


app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
