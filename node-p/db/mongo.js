const express = require('express')
require('dotenv').config()
const http =  require('http')
const mongoose = require('mongoose')
const fs = require("fs")
const  users = require('../api/user.json')
// const { default: mongoose } = require('mongoose')
const User = require("./schema_model")

const app = express()
const port = 8000 


//  conecting database 
mongoose.connect(process.env.DB_URL).then(() =>{
    console.log(" MongoDb Connected ")
}).catch((error)=>{
    console.log(error , " error message ")

})



//  using middleware 

app.use(express.urlencoded({extended : false }))


app.get("/api/users" , async (req , res)=>{
    const users_mongo = await User.find({})
    return res.status(200).json(users_mongo)
    // res.end("runnnig api succefull")
})

app.get("/api/users/:id" , async (req , res)=>{
    const id =  req.params.id 
    const id_user = await User.findById(id)
    // const user = users.find((user) => user.id === id );
    if (!id_user){
        return res.status(404).json({error : " user not found ! "})
    }
    // console.log(id , user)

    return res.json(id_user);
    // res.end("runnnig api succefull")
})




app.patch("/api/users/:id" , async(req , res)=>{
    const id = req.params.id
    const lname = req.body.lastName
    console.log(lname)
    await User.findByIdAndUpdate(id , {lastName : lname}).then(()=>{
        console.log(" data updated succefully ")
    })
    // TODO : update user 
    return res.json({status : "data update succefull"})
})

app.delete("/api/users/:id" , (req , res)=>{
    // TODO : delete user 
    return res.json({status : "pending"})
})

app.post("/api/users" , async (req , res)=>{
    // TODO : create user 
    const body = req.body;
    // console.log(body)

    if (
        !body || 
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title 


    ){
        return res.status(404).json({status : "missing args ! " , data : body})

    }

    const result = await User.create({
            firstName : body.first_name ,
            lastName : body.last_name ,
            gender : body.gender ,
            email : body.email,
            jobTitle : body.job_title


       })
    console.log(result, "result which we create ")

    return res.status(200).json({status : "data post"})
    

    // return res.json({status : "pending"})
})



app.get("/user" , async (req , res)=>{
    const allUser = await User.find({})
    const html  = `
    <ul>
    ${allUser.map((user)=> `<li> ${user.firstName}-${user.lastName} ${user.email} ${user.gender} ${user.jobTitle} id - ${user._id}<li/>`)}
    <ul/>`
    res.send(html) 
    
})


//  here patch and delete have same url why we are not use same url 

// app.route("/api/user/:id").get((req , res)=>{}).patch((req , res)=>{}).delete((req , res)=>{})


app.listen(port , "localhost" , () => {
    console.log("api server is running on port 8000 .......")
})


