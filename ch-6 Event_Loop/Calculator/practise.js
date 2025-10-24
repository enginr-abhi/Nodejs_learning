const http = require('http');
const PORT = 8080;
const {requestHandler} = require('./requestHandler');
const server = http.createServer(requestHandler);

server.listen(PORT, ()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})