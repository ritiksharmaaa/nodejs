const express = require("express")
const {handleGetUsers  , handleGetUsersId , handleUpdateUserById , handleDeleteUsersId, handleCreateUser } = require('../controllers/user.controller')
 

const router = express.Router();

// you ca do either this way 
//  1 router.get("/" , async (req , res)=>{
//     await handleGetUsers(req , res)

// })

//  2 router.get("/" , functionname ).post().patch;

//   3 router.route("/").get(functionname).post().patch 

// my understanding 

// in dajngo  we have url here router we have view here we say contrtoller template here we have views 






// router.get("/api/users , async (req , res)=>{
router.route("/").get(handleGetUsers).post( handleCreateUser)

// router.get("/api/users/:id" , async (req , res)=>{
router.route("/:id").get(handleGetUsersId )
.patch(handleUpdateUserById)
.delete(handleDeleteUsersId)

// router.post("/" , handleCreateUser)


module.exports = router ;