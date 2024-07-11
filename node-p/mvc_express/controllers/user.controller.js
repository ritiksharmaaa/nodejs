const User = require('../models/user_schema')



// class user

async function handleGetUsers(req , res ){
    
    const users_mongo = await User.find({})
    return res.status(200).json(users_mongo)
}

async function handleGetUsersId(req , res){
    const id =  req.params.id 
    const id_user = await User.findById(id)  
    // const user = users.find((user) => user.id === id );
    if (!id_user){
        return res.status(404).json({error : " user not found ! "})
    }
    // console.log(id , user)

    return res.json(id_user);
}

async function handleUpdateUserById(req , res){
    const id = req.params.id
    const lname = req.body.lastName
    console.log(lname)
    await User.findByIdAndUpdate(id , {lastName : lname}).then(()=>{
        console.log(" data updated succefully ")
    })
    // TODO : update user 
    return res.json({status : "data update succefull"})
}

async function handleDeleteUsersId(req , res ){
    const id = req.params.id
    await User.findByIdAndDelete(id);
    return res.status(200).json({status : "user deleted Succefully ! "})
}

async function handleCreateUser(req , res){
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

    return res.status(200).json({status : "data posted"})
    


}



module.exports = { 
    handleGetUsers ,
    handleGetUsersId ,
    handleUpdateUserById  , 
    handleDeleteUsersId , 
    handleCreateUser
 }