// // //simple Node.js server
// // const http = require('http');

// // // this return us a server
// // const server = http.createServer((req, res) => {
// //  console.log(req);
// // });

// // const PORT = 3000;

// // server.listen(PORT, () => {
// //   console.log(`server running at http://localhost:${PORT}/`)
// // });

// // we use this module for client to get request and response 
// const http = require('http');

// // create a callback function

// // function requestListener(req, res){
// //   console.log(req);
// // }

// // http.createServer(requestListener);
// const server = http.createServer((req, res)=>{
//   console.log(req);
//   // process.exit();
// });

// const PORT = 3000;

// server.listen(PORT,()=>{
//   console.log(`server is running on address-: http://localhost:${PORT}`);
// })

// const http = require('http');

// function requestListener(req, res){
//   console.log(req);
// }

// http.createServer(requestListener);
// http.createServer(function(req, res){
//   console.log(req);
// });

// const server = http.createServer((req, res) => {
//   console.log(req);
// });

const PORT = 3000;
// server.listen(PORT, ()=>{
//  console.log(`server is running on address http://localhost:${PORT}`);
// })

const http = require('http');
const server = http.createServer((req, res)=>{
  console.log(req);
  console.log(res);
})
server.listen(PORT, ()=>{
 console.log(`server is running on address http://localhost:${PORT}`);
})
