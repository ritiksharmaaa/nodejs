const express = require('express')
const http =  require('http')
const fs = require("fs")
const  users = require('./api/user.json')

const app = express()
const port = 8000 



//  using middleware 

app.use(express.urlencoded({extended : false }))

//  custom middle ware 
//  next stand for route folder 
app.use(( req , res , next )=>{
    console.log(" hello from middleware custom made !")
    req.user = "ritik sharma "
    // return res.json({msg : " returned by middleware !"})

    //  next run next function or route if some new middleware we pass to another middleawre 
    next();
})
app.use(( req , res , next )=>{
    console.log(" hello from middleware 2  custom made !")
    console.log(req.user ,' i have acces data which saved in middleware one used in 2 ')
    //  we call crete a log we ahve use it as a middleware ! we save all the request property in log 

    next();
})


app.get("/api/user" , (req , res)=>{
    return res.json(users.slice(0 , 50))
    // res.end("runnnig api succefull")
})

app.get("/api/user/:id" , (req , res)=>{
    const id = Number( req.params.id);
    const user = users.find((user) => user.id === id );
    // console.log(id , user)

    return res.json(user);
    // res.end("runnnig api succefull")
})



app.get("/user" , (req , res)=>{
    const html  = `
    <ul>
    ${user.slice(0,100).map((user)=> `<li> ${user.first_name}-${user.last_name} ${user.email} ${user.gender} ${user.job_title} id - ${user.id}<li/>`)}
    <ul/>`
    res.send(html) 
    
})

app.post("/api/users" , (req , res)=>{
    // TODO : create user 
    const body = req.body;
    // console.log(body)
    users.push({...body , id : users.length + 1})
    fs.writeFile('./user.json' , JSON.stringify(users) , (err , result)=>{
        return res.json({status : "success" , id : users.length + 1})

    })

    // return res.json({status : "pending"})
})

app.patch("/api/users/:id" , (req , res)=>{
    // TODO : update user 
    return res.json({status : "pending"})
})

app.delete("/api/users/:id" , (req , res)=>{
    // TODO : delete user 
    return res.json({status : "pending"})
})


//  here patch and delete have same url why we are not use same url 

// app.route("/api/user/:id").get((req , res)=>{}).patch((req , res)=>{}).delete((req , res)=>{})


app.listen(port , "localhost" , () => {
    console.log("api server is running on port 8000 .......")
})


