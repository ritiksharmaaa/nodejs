const auth_User = require('../models/auth_user.model')

async function handelUser_Signup(req , res){
    //  we can check that password email is valid or not .
    const {name , email , password } = req.body;
    await auth_User.create({
        name ,
        email,
        password
    })
// we are redirect the user to home page or may be signin page . 


     return res.render("home")


}

module.exports = handelUser_Signup;