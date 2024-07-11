const { getUser ,  getuserjwt } = require("../service/auth.service");

//  2 way to see auth middleware not sedding to login page because some pages if see without login 


//  piyush logic  for auth middleware  with all aspect  
//  it work for just get the user from token in out to request objet if no user we do nothing we allow to see oor some website content free 
async function getCheckForAuthentication(req , res , next ){
  //here  code diffrent if you use token we have tochange litbit . 
  const authorizationTokenValue = req.headers["authorization"];
  req.user = null ;
  if (!authorizationTokenValue || !authorizationTokenValue.startwith("Bearer")){
      return next();
  }
  const token = authorizationTokenValue.split("Bearer")[1];
  const user  = getuserjwt(token) // here we have use token function but we have to call uuid function 
  if (!user) return res.redirect("/user/login") // here user have token but we cant find user because token expire so we say that you login we we can tshow him unauth =roxi page where full acess is not possible to our website . 

  req.user = user ;
  next()


}
// is like dynamic checking for role not we have to make lot of middleware to ckek for multiple user we just tell them at them at the time of putting restrication which user have to allow to use it .
function restrictTo(roles = []){ // howit work we call this function before route run controll function restricTO(["NORMAL"]) so we check if user have normal roll or not if have we run next if not 
  return function(req, res ,next){
      if(!req.user) return res.redirect("/user/login")
      if( !req.user || !roles.includes(req.user.role))
          return res.ens("Unauthrozie")

      return next();


  }


}












// ---------------------------------just for learning purpose ho witauth middleware work with jwt or session 



// this middleware use tocke based header  token  and uid when we use other than browser based client 


//  this function is restric to those user who are not login so that we restrict them to only login user like comment on video only authetcated user comment so we put restric to comment to those user who not login . 
async function restrictToLoggedinUserOnly_with_header_tocken(req , res,  next ){
  const token_or_Uid = req.headers["authorization"]
  const bearer_token = token_or_Uid.split("Bearer")[1] // it give array we have  two array in first we have 0 , 1 
  const user = getuserjwt(bearer_token)
  if (!user) return res.redirect("/user/login")
  req.user = user 
  next()



}


//  this middelware  for tocken based authentication 
async function restrictToLoggedinUserOnly(req, res, next) {
  const token = req.cookies?.token ;
  const user = getuserjwt(token);
  if (!user) return res.redirect("/user/login");
  req.user = user 
  


  // when we use cookiew we have to use cookie parser .. session based auth 
  // const userUid = req.cookies?.uid;
  // if (!userUid) {
  //   return res.redirect("/user/login");
  // }
  // const user = getuser(userUid);
  // if (!user) return res.redirect("/user/login/");
  // req.user = user ;

  next()



}

module.exports = {
  getCheckForAuthentication,
  restrictTo,
}


//  we have to create on more or not ,  moddleware which restirc to user data because if we use this middleware so the free content is not show by user so we have to just check if uid have than we save them uder in request and if not we just call next function .  no redirect . 

//  furthure when we render some user related data we first check if usere have or not in request 


//  we have to way either we manage this is in controll if userhave in req we give data else redirect them to login .

// or make aniother middleware and put it to  middle of calling route or make a constructor and put on our controller function .