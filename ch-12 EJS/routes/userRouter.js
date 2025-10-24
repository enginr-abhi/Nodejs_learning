const path = require('path');
const express = require('express');
const rootDir = require('../utils/pathUtil');
const { registeredHomes } = require('./hostRouter');
const userRouter = express.Router();
userRouter.get("/", (req, res, next)=>{
  console.log(req.url, req.method);
  // res.sendFile(path.join(__dirname,'../' ,'views','home.html'));
  console.log(registeredHomes);
  // res.sendFile(path.join(rootDir,'views','home.html'));
  res.render('home',{registeredHomes : registeredHomes,pageTitle:'airbnb Home',currentPage:'home' });

})
module.exports = userRouter;