
exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  // res.sendFile(path.join(rootDir,'views','addHome.html'));
    res.render('addHome',{pageTitle:'Add Home to airbnb',currentPage:'addHome'});
}

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:',req.body)
  // registeredHomes.push({houseName:req.body.houseName});
  registeredHomes.push(req.body);
  console.log(req.url, req.method, req.body);
  // res.sendFile(path.join(rootDir,'views','homeAdded.html'));
  res.render('homeAdded', {pageTitle:'Home Added Succefully',currentPage:'homeAdded'});
}

exports.getHomes = (req, res, next)=>{
  console.log(req.url, req.method);
  // res.sendFile(path.join(__dirname,'../' ,'views','home.html'));
  console.log(registeredHomes);
  // res.sendFile(path.join(rootDir,'views','home.html'));
  res.render('home',{registeredHomes : registeredHomes,pageTitle:'airbnb Home',currentPage:'home'});

}
// exports.registeredHomes = registeredHomes;

