const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');
hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  // res.sendFile(path.join(rootDir,'views','addHome.html'));
    res.render('addHome',{pageTitle:'Add Home to airbnb',currentPage:'addHome'});
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log('Home Registration successful for:',req.body)
  // registeredHomes.push({houseName:req.body.houseName});
  registeredHomes.push(req.body);
  console.log(req.url, req.method, req.body);
  // res.sendFile(path.join(rootDir,'views','homeAdded.html'));
  res.render('homeAdded',{pageTitle:'Home Added Succefully',currentPage:'homeAdded'});
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;