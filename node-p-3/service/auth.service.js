//  this will not work if you genrate uid in server running time one . and when you restart you server the data in map will not exist so even in cookie yiu save uid this is not valid
// that why we all are using a file based session , db based session and local based which we are currently right now

const jwt = require("jsonwebtoken");
const sessionIdToMap = new Map();

function setUser(id, user) {
  sessionIdToMap.set(id, user);
}

function getUser(id) {
  user = sessionIdToMap.get(id);
  return user;
}

// jwt authentication : -

// secrettoken is impo if this can lost anyone can create tocken read tocken which id dangerous ..
const secrettoken = " ";

// function setuserjwt( id , user){ you give dynamicalyy secret id .
function setuserjwt(user) {
  const payload = {
    // id ,
    ...user,
  };
  return jwt.sign(payload, secrettoken);
}

function getuserjwt(tocken) {
  if (!tocken) return null;
  try {
    return jwt.verify(tocken, secrettoken);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
  setuserjwt,
  getuserjwt,
};
