const http = require("http");
// const testingSyntax = require('./syntex');
// const runtime = require('./runtime');
const logical = require("./logical");
const PORT = 3002;
const requestHandler = require("./user");
const server = http.createServer(requestHandler);
// const server = http.createServer(logical);
// const server = http.createServer((req, res) => {
//   console.log(req.url,req.method);
//   // testingSyntax();
//   // runtime();
//   logical();
// })

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
