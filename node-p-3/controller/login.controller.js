const auth_User = require("../models/auth_user.model");
const { setUser , setuserjwt  } = require("../service/auth.service");
const { v4: uuidv4 } = require("uuid");


async function handelUser_login(req, res) {
  // login logic
  const { email, password } = req.body;
  // this is rough login trial .
  const user = await auth_User.findOne({ email, password });
  if (!user) {
    // mean user i  not in db than we say error invalid username and creditial .
    return res.render("login", { error: "invalid username or password" });
  }
//  we have to check is there user and pass right or not or we have to use hash password data to check is match or not 
//  you can do this here on in moddle .




  // creating a session id and store this id with user object so ican chcke if this id came so who is user .
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);

  // jwt authentication 

  const token = setuserjwt(user)

  res.cookie('token' , token , {httponly : true , secure : true })





  return res.redirect("/");
}

module.exports = handelUser_login;
