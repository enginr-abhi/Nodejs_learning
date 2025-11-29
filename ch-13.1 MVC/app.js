const PORT = 3000;
const path = require('path');
const rootDir = require('./utils/pathUtil');
const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const { get404 } = require('./controllers/error');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended:true}));
app.use(userRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir,'public')))
app.use(get404);
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
