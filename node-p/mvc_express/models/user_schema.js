const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName :{
        type : String,
        require : true 
    },
    lastName :{
        type : String ,
        // require : false  by default false . 

    } , 
    email : {
        type : String ,
        require : true ,
        unique : true 
    },
    jobTitle : {
        type : String
    },
    gender : {
        type : String 
    }, 
    // {timestamps : true } fro getting date of create at and updated at 
})

// name of model and argument of model is same other wise it not work 

// const User = mongoose.model("User" , schema )
const User = mongoose.model("User" , UserSchema );

module.exports = User ;