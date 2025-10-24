// console.log("Kg coding is the best");
// const fs = require('fs');
// // let a = 10;
// // let b = 5;
// // let sum = a+b;
// // let product = a*b;
// // let data = `Sum :${sum}\nProduct:${product}`;
// // fs.writeFile('output.txt',data,(err)=>{
// //   if(err) console.log('error occured');
// //   else console.log("Data is written to file");
// // })
// const data = 'Writing File';
// fs.writeFile('finalResult.txt',data,(err)=>{
//   if(err){
//     console.log("Error occureed");
//   }
//   else{
//     console.log("File written Successfully", data);
//   }
// })

const fs = require('fs');
fs.writeFile('output.txt', 'writefile',(err)=>{
  if(err) console.log('Error occurred');
  else console.log('File writen SUCCESFULLY');
})

fs.writeFile('mytxt.txt','hello world',(err)=>{
  if(err){
    console.log('Error occured');
  }
  else{
    console.log('File written successfully');
  }
})