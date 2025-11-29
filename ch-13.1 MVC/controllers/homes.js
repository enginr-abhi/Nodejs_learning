const Home = require('../models/home');

exports.getHomes =  (req, res, next) => {
  Home.fetchAll((registeredHomes)=>{
    res.render('home',{registeredHomes: registeredHomes, pageTitle:'Available Homes', currentPage: 'Home'});
  });
}

exports.getAddHome = (req, res, next) => {
  res.render('addHome',{pageTitle:'Add Home to airbnb', currentPage: 'addHome'});
}

exports.postAddHome = (req, res, next) => {
  const {houseName,price,location,rating,photoUrl} = req.body;
  const home = new Home(houseName,price,location,rating,photoUrl);
  home.save()
  // registeredHomes.push(req.body);
  res.render('homeAdded', {pageTitle:'Home Added Succefully', currentPage: 'homeAdded'});
}


