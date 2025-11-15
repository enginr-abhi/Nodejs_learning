// core module
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

  const homeDataPath = path.join(rootDir, "data", "homes.json");
// fake datbse as in memory array
// let registeredHomes = [];
// when we can read from file so wjy we maintain in memory array

// module.exports  = class Home {
//  constructor(houseName, price, location, rating, photoUrl){
//     this.houseName = houseName;   
//     this.price = price;   
//     this.location = location;
//     this.rating = rating;   
//     this.photoUrl = photoUrl; 
//  }
//  save(){
//   Home.fetchAll((registeredHomes) => {
//   registeredHomes.push(this);

//   fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err)=>{
//     if(err){
//       console.log('Error while writing file', err);
//     }else{
//       console.log('File written successfully');
//     }
//  })
//   })
// }

// //  static fetchAllHomes(){
// //   const filpPath = path.join(rootDir, 'data', 'homes.json');
// //   fs.readFile(filpPath, (err, data) => {
// //    console.log('File read', err, data);
// //    if(!err){
// //     registeredHomes = JSON.parse(data);
// //    }
// //    return registeredHomes
// //   });
// // }
//  static fetchAll(callback){
//   fs.readFile(homeDataPath, (err, data) => {
//   //  console.log('File read', err, data);
//    callback(!err ? JSON.parse(data) : []);
//   //  if(!err){
//   //   callback(JSON.parse(data));
//   //  }else{
//   //   callback([]);
//   //  }
//   });
// }
// }

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      if (this.id) { // edit home case
        registeredHomes = registeredHomes.map(home => 
          home.id === this.id ? this : home);
      } else { // add home case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === homeId);
      callback(homeFound);
    })
  }

  static deleteById(homeId, callback) {
    this.fetchAll(homes => {
      homes = homes.filter(home => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
        Favourite.deleteById(homeId, callback);
      });
    })
  }
};