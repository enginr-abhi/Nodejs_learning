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

// const PORT = 3000;
// // server.listen(PORT, ()=>{
// //  console.log(`server is running on address http://localhost:${PORT}`);
// // })

// const http = require('http');
// const server = http.createServer((req, res)=>{
//   console.log(req);
//   console.log(res);
// })

// server.listen(PORT, () => {
//  console.log(`server is running on address http://localhost:${PORT}`);
// })


// const http = require('http');
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log(req.method);
//   console.log(req.headers);
//   res.end('Hello from the server');
// } );

// const PORT = 3000;    
// server.listen(PORT, () => {
//   console.log(`server is running on address http://localhost:${PORT}`);
// });

// Compare this snippet from ch-2%20First%20Nodejs%20Program/first.js:    

const http = require('http');
// function requestListener(req, res){
//   console.log(req);
// }
// http.createServer(requestListener)

// http.createServer(function (req, res){
//   console.log(req);
// })
const server = http.createServer((req, res) => {
  console.log(req);
})
// server.listen(3000);

const PORT = 3000;
server.listen(PORT, () => {
 console.log(`server is running on address http://localhost:${PORT}/`);
})

