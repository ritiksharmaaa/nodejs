// console.log("i am working well ...")
const express = require("express")
const fs = require("fs")
const zlip = require("zlib") // buitl in zip converter .

// const stream = require("stream")
// const status = require("express-status-monitor")


const app = express() 

// app.use(status);
app.get("/" , (req , res)=>{
    fs.readFile("./sample.txt" , (err , data)=>{
        res.end(data)
    })
    console.log("i am working ")
})
//  create stremm of pipe() mean where we have to sen dthe chunk we called it pipe 

// stream read smapl to --pipe--> zipper --pipe--> fs.writeStream() 
fs.createReadStream("./sample.txt").pipe( zlip.createGzip().pipe(fs.createWriteStream("./sample.zib"))) 


// to this method we dont need to wait we read chunk make chunk to zib and again read chunk update to zip.txt so we ahve not use 800 memory to perfom this task .





app.get("/read-stream" , (req , res)=>{
    const stream = fs.createReadStream("./sample.txt" , "utf-8" );
    stream.on('data', (chunk)=>{
        res.write(chunk)
    })
    stream.on("end" , ()=> res.end())
})




// app.get("/zip-stream" , (req  , res)=>{}
// )


app.listen(8000 , "localhost" , ()=>{
    console.log("server is listen on port http://localhost:8000")
})

