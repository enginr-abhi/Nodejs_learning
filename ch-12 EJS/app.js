// core Module
const path = require('path');

// External Module
const express = require('express');
const app = express();

//Local Module
const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended:true}));
app.use(userRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir,'public')))
app.use((req,res,next)=>{
  // res.status(404).sendFile(path.join(rootDir,'views','404.html'));
  res.status(404).render('404',{pageTitle:'Page Not Found',currentPage: '404'});
})
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
