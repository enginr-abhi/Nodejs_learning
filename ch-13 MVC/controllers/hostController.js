// const registeredHomes = [];
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  // console.log(req.url, req.method);
  // res.sendFile(path.join(rootDir,'views','addHome.html'));
  // res.render('/admin/addHome',{pageTitle:'Add Home to airbnb', currentPage: 'addHome'});
  res.render('host/add-home', { 
    pageTitle:'Add Home to airbnb', 
    currentPage: 'addHome',
  });
}

// exports.getHomes = (req, res, next) => {
//   // console.log(req.url, req.method, req.body);
//   Home.fetchAllHomes(registeredHomes => {
//       // console.log('registeredHomes', registeredHomes);
//   // res.sendFile(path.join(__dirname,'../' ,'views','home.html'));
//   // res.sendFile(path.join(rootDir, 'views', 'home.html'));
//   // res.render('home',{registeredHomes: registeredHomes, pageTitle:'Available Homes', currentPage: 'Home'});
//     res.render('store/home-list',{registeredHomes: registeredHomes, pageTitle:'Available Homes', currentPage: 'Home'})
//   });
// }


exports.postAddHome = (req, res, next) => {
  // console.log(req.url, req.method, req.body)
  // const home = new Home(req.body.homeName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);
  const {houseName, price, location, rating, photoUrl} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save()
  // registeredHomes.push(req.body);
  // res.sendFile(path.join(rootDir,'views','homeAdded.html'));
  // res.sendFile(path.join(rootDir,'views','homeAdded.html'));
  res.render('host/home-added', {
    pageTitle:'Home Added Succefully',
    currentPage: 'homeAdded'}
  );
}


exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};

