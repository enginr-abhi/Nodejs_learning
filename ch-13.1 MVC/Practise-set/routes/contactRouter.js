const express = require('express');
const contactRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/mainUtil');
contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','contact-us.html'));
})

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir,'views','contact-success.html'));
})
module.exports = contactRouter;


