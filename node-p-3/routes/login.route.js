const express = require("express");
const handleUserlogin = require("../controller/login.controller")

const router = express.Router()

router.get("/" ,(req , res)=>{
   // console.log(" login render succeful ")
   res.render("login")
})

router.post("/" , handleUserlogin  );


module.exports = router ;