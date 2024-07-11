const os = require("os")
const cluster = require("node:cluster")
const totalcpu = (os.availableParallelism()) //to check ho wany thread you have i have 16 

if(cluster.isPrimary){
    for (let i = 0;  i < totalcpu; i++ ){
        cluster.fork();


    }

}else{
//  entire code of the server ....
const express = require("express");
const app = express();


app.get("/" , (req , res )=>{
    res.json({
        messages : "hello from the server ",
        processid : process.pid
    })
})


app.listen(8000 , "localhost", () => console.log( " server is listen on port 8000 : http://localhost:8000 "))



}


