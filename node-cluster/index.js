const express = require("express");
const os = require("os");




const app = express()

app.get("/" , (req , res )=>{
    res.json({
        messages : "hello from the server ",
        processid : process.pid
    })
})



app.listen(8000 , "localhost" , ()=>{
    console.log("running ..... " , process.pid)
})