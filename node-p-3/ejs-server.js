const express = require("express");
const path = require("path")
const ejs = require("ejs")

const app = express()

app.use(express.urlencoded({extended : false }))
// app.use(ejs)
// express are compatable with express js 
app.set("view engine" , "ejs") 
app.set("views" , path.resolve("./views") );
app.use(express.json())

app.get("/" , (req , res)=>{
    console.log("i am working ")
    data = {
        data : "money",
        madhu : "sharma"
    }
    
    // res.end(" html rendered ..")
    res.render("index" , {data : data})
})

app.listen(8000 , "localhost" , ()=>{
    console.log(
"serverrunning on port 800 " , "http://localhost:8000"    )
})