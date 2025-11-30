// core module
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

// fake datbse as in memory array
// let registeredHomes = [];
// when we can read from file so wjy we maintain in memory array

module.exports  = class Home {
 constructor(houseName, price, location, rating, photoUrl){
    this.houseName = houseName;   
    this.price = price;   
    this.location = location;
    this.rating = rating;   
    this.photoUrl = photoUrl; 
 }
 save(){
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
}

//  static fetchAllHomes(){
//   const filpPath = path.join(rootDir, 'data', 'homes.json');
//   fs.readFile(filpPath, (err, data) => {
//    console.log('File read', err, data);
//    if(!err){
//     registeredHomes = JSON.parse(data);
//    }
//    return registeredHomes
//   });
// }
  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

}