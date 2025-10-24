const express = require('express');
const userRouter = express.Router();
// const path = require('path');
// const rootDir = require('../utils/pathUtil');
// const { registeredHomes } = require('./hostRouter');
const homeController = require('../controllers/homes');
userRouter.get("/", homeController.getHomes)
module.exports = userRouter;