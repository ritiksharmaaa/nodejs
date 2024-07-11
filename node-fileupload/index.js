const express = require("express");
const multer = require("multer");
const path = require("path")
//  ist way to uplor just make and using multer.singleupload(field name name of uplord fied )
// const upload = multer({
//     // this upload is like a middleware and we hav another file callled disk storage whic help to manage more control on that data ..
//     dest : "uploads/"
// })

// second way to uplord with full overall manageblity and they not make folder automatically 

const storage = multer.diskStorage({
    destination : function( req, file , cb ){
        // before return we have to check user is login or not 
       return  cb(null , "./uploads")
    },
    filename : function(req ,file , cb){
        return cb(null ,`${Date.now()}-${file.originalname}` )

    }
})


const upload = multer({
    storage : storage // our storage object 
})







const app = express();
app.set("view engine" , "ejs")
app.set("views" , path.resolve("./views") );
app.use(express.json());
app.use(express.urlencoded({extended : false }))


app.get("/" , (req , res)=>{
   return res.render("homepage")
})

//  we ahve two way two way to upload file using multer single upload or array upload .


app.post("/upload" , upload.single('profileImage') , (req,  res)=>{
    console.log(req.body , " request body ")
    console.log(req.file, " request file  ") 
    
  
//  {
//    fieldname: 'profileImage',
//    originalname: 'elon-twitter.jpg',
//    encoding: '7bit',
//    mimetype: 'image/jpeg',
//    destination: 'uploads/',
//    filename: 'e9a2e6892a36272d136e9257bfe2ba92',
//    path: 'uploads\\e9a2e6892a36272d136e9257bfe2ba92',
//    size: 256136
//  }  req.file gave this object which help us it upload filei in middleware time and give this detail to do furthure 
// save this data in our db .. we can also manage there upload sytem we can modified to save to cloud and return this type of data 
    return res.redirect("/")

} )

app.listen(8000 , "localhost" ,()=>{console.log(" we are running server on : http://localhost:8000 ")})