const http = require('http');
const express = require('express');


const app = express();


app.get('/', (req , res) => {
    return res.end("home page !")

})


app.get('/about' , (req , res)=>{
    return res.end("about page ! ")
})

app.get('/contact' , (req , res)=>{
    return res.end("contact page")
})


// const server = http.createServer(app);
// server.listen(8000 ,"localhost" , (err , result)=>{
//     console.log("server is started on port 8000")
// })


app.listen(8000 , "localhost" , (err , result)=>{
    console.log(" server is startes on port 8000")
})