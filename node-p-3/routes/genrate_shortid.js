const express = require("express");
const {restricTo } = require("../middleware/authmiddleware")
const { route } = require("./login.route");


const router = express.Router()

//  here we import restric to assign restriction on a paticular url we can also put htis restricction on controller 
//  here we can give manuall making role but in djadngo we have dynamic role we can create lot of role and use it as dynami cally but here we do manually.
route.get("/url" , restricTo(["NORMAL"]),(req , res)=>{
    console.log("genrate short url ! ")

})