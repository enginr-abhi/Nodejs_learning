const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
app.use(express.urlencoded({extended:true}));
app.use(userRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir,'public')))
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
