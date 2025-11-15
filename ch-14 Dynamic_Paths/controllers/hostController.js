// // const registeredHomes = [];
// const Home = require("../models/home");

// exports.getAddHome = (req, res, next) => {
//   // console.log(req.url, req.method);
//   // res.sendFile(path.join(rootDir,'views','addHome.html'));
//   // res.render('/admin/addHome',{pageTitle:'Add Home to airbnb', currentPage: 'addHome'});
//   res.render('host/addHome',{pageTitle:'Add Home to airbnb', currentPage: 'addHome'});
// }

// // exports.getHomes = (req, res, next) => {
// //   // console.log(req.url, req.method, req.body);
// //   Home.fetchAllHomes(registeredHomes => {
// //       // console.log('registeredHomes', registeredHomes);
// //   // res.sendFile(path.join(__dirname,'../' ,'views','home.html'));
// //   // res.sendFile(path.join(rootDir, 'views', 'home.html'));
// //   // res.render('home',{registeredHomes: registeredHomes, pageTitle:'Available Homes', currentPage: 'Home'});
// //     res.render('store/home-list',{registeredHomes: registeredHomes, pageTitle:'Available Homes', currentPage: 'Home'})
// //   });
// // }



// exports.getHostHomes = (req, res, next) => {
//   Home.fetchAll((registeredHomes) =>
//     res.render("host/host-home-list", {
//       registeredHomes: registeredHomes,
//       pageTitle: "Host Homes List",
//       currentPage: "host-homes",
//     })
//   );
// };

// exports.postAddHome = (req, res, next) => {
//   // console.log(req.url, req.method, req.body)
//   // const home = new Home(req.body.homeName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);
//   const {houseName, price, location, rating, photoUrl} = req.body;
//   const home = new Home(houseName, price, location, rating, photoUrl);
//   home.save()
//   // registeredHomes.push(req.body);
//   // res.sendFile(path.join(rootDir,'views','homeAdded.html'));
//   // res.sendFile(path.join(rootDir,'views','homeAdded.html'));
//   res.render('host/home-added', {pageTitle:'Home Added Succefully',currentPage: 'homeAdded'});
// }

const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findById(homeId, home => {
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('Came to delete ', homeId);
  Home.deleteById(homeId, error => {
    if (error) {
      console.log('Error while deleting ', error);
    }
    res.redirect("/host/host-home-list");
  })
};