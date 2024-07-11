const express = require("express");
const path  = require("path");
const cookieParser = require("cookie-parser")
const ejs = require("ejs");
const db_connect = require("./db_connected");
const userRoutelogin = require("./routes/login.route");
const userRouteSignup = require("./routes/signup.route");

// middleware 
const restrictToLoggedinUserOnly = require("./middleware/authmiddleware")

// db_connect().then(()=>{
//     console.log("db connected successfully .....")
// })

const app = express()
app.use(express.urlencoded({extended : false }));
app.use(express.json())
app.use(cookieParser());
app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));


//  here you put middleware function if middleswre is ok than your next function is show .
app.get("/" ,  restrictToLoggedinUserOnly ,(req , res)=>{

    //  here we are rednring user crested data based on user id have inside .
    
    res.render('home')
})

app.use("/login" , userRoutelogin )
app.use("/user" , userRouteSignup  )


app.listen(8001 , "localhost" ,()=>{
    console.log("server is listen on port 8001 :   http://localhost:8001 ")
})