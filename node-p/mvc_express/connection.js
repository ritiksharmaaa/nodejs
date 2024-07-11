const mongoose = require('mongoose')
// mongoose.set("strictPopulate" , true )
require('dotenv').config()


 async function db_connect(){
    // console.log(process.env.DB_URL)
    return  mongoose.connect(process.env.DB_URL)
}

module.exports = {db_connect} ;