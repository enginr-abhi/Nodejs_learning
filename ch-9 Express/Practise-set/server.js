const express = require('express');
const app = express();
const PORT = 3000;
app.use("/", (req, res, next) =>{
  console.log('Come in first middleware', req.url, req.method);
  next();
})
// app.use("/", (req, res, next) =>{
//   console.log('Come in Second middleware');
//   next();
// })
// app.use("/", (req, res, next) =>{
//   console.log('Come in third middleware');
//   res.send('<p>Come from third middleware</p>')
// })
// app.use("/", (req, res, next) =>{
//   console.log('Come in third middleware');
//   res.send('<p>Come from third middleware</p>')
// })

app.get("/", (req, res, next) =>{
  console.log('Handline / for GET', req.url, req.method);
 res.send('<h1>Welcome to first Middleware</h1>');
})

app.get("/contact-us", (req, res, next) =>{
  console.log('Come in fourth middleware');
  res.send(`<h1>Please enter your details</h1>
    <form action="/contact-us" method="POST">
    <label for="userName">Name</label>
    <input type="text" name="userName" id="userName">
    <label for="userEmail">Email</label>
    <input type="email" name="email" id="userEmail">
    <input type="submit" value="submit">
  </form>`)
})

app.post("/contact-us", (req, res, next) =>{
  console.log('Handline / contact-us for POST', req.url, req.method);
  console.log('Come in fourth middleware');
  res.send('<h1>We will contact you shortly</h1>', req.url, req.method);
})


app.listen(PORT, ()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})