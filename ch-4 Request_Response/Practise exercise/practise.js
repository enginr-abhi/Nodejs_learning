// const http = require('http');
// const PORT = 8000;
// const server = http.createServer((req,res)=>{
// console.log(req.url, req.method, req.headers);
// if(req.url === '/'){
// res.setHeader('Content-Type','text/html');
// res.write(`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Practise set - 4 </title>
// </head>
// <body>
//   <header>
//     <nav>
//       <li><a href="/Home">Home</a></li>
//       <li><a href="/Men">Men</a></li>
//       <li><a href="/Women">Women</a></li>
//       <li><a href="/kids">Kids</a></li>
//       <li><a href="/Cart">Cart</a></li>
//     </nav>
//   </header>
// </body>
// </html>`);
// return res.end();
// }else if(req.url === '/Home'){
//   res.write(`<h1>Welcome to Home</h1>`);
//   return res.end();
// }
// else if(req.url === '/Men'){
//   res.write(`<h1>Welcome to Men</h1>`);
//   return res.end();
// }
// else if(req.url === '/Women'){
//   res.write(`<h1>Welcome to Women</h1>`)
//   return res.end();
// }
// else if(req.url === '/Kids'){
//   res.write(`<h1>Welcome to Kids</h1>`);
//   return res.end();
// }
// else if(req.url === '/Cart'){
//   res.write(`<h1>Welcome to Cart</h1>`);
//   return res.end();
// }
//   res.write(`<h1>404 page not found</h1>`);
//   return res.end();
// })
// server.listen(PORT,()=>{
//   console.log(`server is running at http://localhost:${PORT}`);
// })
// const http = require("http");
// const PORT = 10000;
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>Practise Set</title></head>");
//   if (req.url === "/") {
//     res.write(
//       '<body><header><nav><li><a href="/Home">Home</a></li><li><a href="/Men">Men</a></li><li><a href="/Women">Women</a></li><li><a href="/kids">Kids</a></li><li><a href="/Cart">Cart</a></li></nav></header></body>'
//     );
//     return res.end();
//   }
//   if (req.url === "/Home") {
//     res.write("<h1>Welcome to Home</h1>");
//     return res.end();
//   } else if (req.url === "/Men") {
//     res.write("<h1>Welcome to Men Page</h1>");
//     return res.end();
//   } else if (req.url === "/Women") {
//     res.write("<h1>Welcome to Women Page</h1>");
//     return res.end();
//   } else if (req.url === "/Kids") {
//     res.write("<h1>Welcome to Kids Page</h1>");
//     return res.end();
//   } else if (req.url === "/Cart") {
//     res.write("<h1>Welcome to Cart Page</h1>");
//     return res.end();
//   }
//   res.write("<h1>404 Page not found</h1>");
//   res.write("</html>");
//   res.end();
// });
// server.listen(PORT, () => {
//   console.log(`server is running at http://localhost:${PORT}`);
// });
const http  = require('http');
const server = http.createServer((req, res) => {
 console.log(req.url, req.method, req.headers);

 res.setHeader('Content-Type', 'text/html');
 res.write('<html>');
 res.write('<head><title>Practise Set</title></head>');

 const url = req.url.toLowerCase(); // lowercase for easy comparison

 if(url === '/'){
   res.write(`<body>
     <header>
    <nav>
      <ol type="A">
      <li><a href="/Home">Home</a></li>
      <li><a href="/Men">Men</a></li>
      <li><a href="/Women">Women</a></li>
      <li><a href="/kids">Kids</a></li>
      <li><a href="/Cart">Cart</a></li>
      </ol>
    </nav>
  </header>
    </body>`);
    res.write('</html>');
    return res.end();
}
else if(url === '/home'){
  res.write('<h1>Welcome to Home</h1>');
  return res.end();
} else if(url === '/men'){
 res.write('<h1>Welcome to Men</h1>');
  return res.end();
}
else if(url === '/women'){
 res.write('<h1>Welcome to Women</h1>');
  return res.end();
}
else if(url === '/kids'){
 res.write('<h1>Welcome to kids</h1>');
  return res.end();
}
else if(url === '/cart'){
 res.write('<h1>Welcome to Men</h1>');
  return res.end();
}
else {
  res.write('<h1>404 Page Not Found</h1>');
}
res.write('</html>');
  res.end();
});

const PORT = 9090;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
})

