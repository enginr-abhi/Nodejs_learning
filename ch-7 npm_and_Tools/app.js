const http = require("http");
const PORT = 3002;
const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url, req.method, req.headers);
})

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
