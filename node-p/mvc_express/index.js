const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const {db_connect } = require('./connection')




//  db connected 


// mongoose.connect(process.env.DB_URL).then(()=>{
//     console.log("MongoDb is connected .....")
// }).catch(()=>{
//     console.log( error , "error is comming ..")
// });

// connected db from diffrent folder 
db_connect().then(()=>{
    console.log("MongoDb is connected ...")
}).catch((error)=>{
console.log(error , "error for db connect ......")
})





// importing router 
const userRouter = require("./routes/user.route");




const app = express()

app.use(express.urlencoded({extended : false }))

app.use('/api/users' , userRouter);









app.listen(8000  , "localhost" , ()=>{
    console.log(" server is listen on port 8001 ...... ")
})