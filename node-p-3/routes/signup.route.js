const express = require("express");
const handelUser_Signup = require("../controller/signup.controller");

const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.post("/signup", handelUser_Signup);

module.exports = router;
