const http = require('http');
const { requestHandler } = require('./handle');
const server = http.createServer(requestHandler);
const PORT = 8080;
server.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})