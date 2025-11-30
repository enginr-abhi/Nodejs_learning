// External Module
const express = require('express');
const app = express();

// Core Module
const path = require('path');
const rootDir = require("./utils/pathUtil");
const PORT = 3000;
//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const errorsController = require("./controllers/errors");



app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);


app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});