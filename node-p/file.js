const { log } = require("console");
const fs = require("fs");

// fs stands for file system 


// syncrnous call 
// fs.writeFileSync('./file-gen.txt' , " content you want to write inside file") /* file name . content */


// async  call 
// fs.writeFile('./async-file.txt' , "content asyncronus " , (err)=> {})


//  asnc filename  , type of file name 
// const result = fs.readFileSync('./file-gen.txt' ,  "utf-8" , (err)=>{})
// console.log(result)


// asnc result came in callback 

// fs.readFile('./file-gen.txt' ,  "utf-8" , (err , result )=>{
//     if (err) {
//         console.log(err)
        
//     }else{
//         console.log(result)
//     }
// })



// append file 
//  we can create log for request 
fs.appendFileSync("./file-gen.txt" , new Date().getDate().toLocaleString())
// fs.unlink for delte 
// fs.cpSync  fir copy file 
// fs.statSync  file static . 
// fs.mkdir for directory making 

//  we have lot of fuction related but have two sync and async . 


