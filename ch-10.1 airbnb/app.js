// external module
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const rootDir = require('./utils/pathUtil');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

app.use(express.urlencoded({extended:true}));
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req,res,next)=>{
  console.log(req.url, req.method);
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
