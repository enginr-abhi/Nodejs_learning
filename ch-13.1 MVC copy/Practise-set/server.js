const express = require('express');
const path = require('path');
const rootDir = require('./utils/mainUtil');
const homeRouter = require('./routes/home');
const contactRouter = require('./routes/contactRouter');
const app = express();
const PORT = 3000;
app.use(express.urlencoded({extended:true}));
app.use(homeRouter);
app.use(contactRouter);
app.use((req,res, next) => {
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
})