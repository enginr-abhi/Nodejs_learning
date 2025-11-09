const express = require('express');
const userRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { registeredHomes } = require('./hostRouter');


userRouter.get("/", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  console.log('registeredHomes', registeredHomes);
  // res.sendFile(path.join(__dirname,'../' ,'views','home.html'));
  // res.sendFile(path.join(rootDir, 'views', 'home.html'));
  res.render('home',{registeredHomes: registeredHomes, pageTitle:'Available Homes', currentPage: 'Home'});
})

module.exports = userRouter;