const mongoose =  require("mongoose")

const Schema = mongoose.Schema;
const auth_User_Schema = new Schema({
    name : {
        type : String ,
        required : true ,

    },
    email : {
        type : String ,
        required : true ,
        unique : true 
    },
    role:{
        required : true ,
        default : "NORMAL",

    },
    password : {
        type : String ,
        required : true ,


    }

    // first authincation vidio no session is made because we are just see how we build auth .
})

const auth_User = mongoose.model("auth_User" , auth_User_Schema );

module.exports = auth_User ;