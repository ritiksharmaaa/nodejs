const mongoose = require("mongoose")
require("dotenv").config()

function db_connect(){
    return  mongoose.connect(process.env.DB_URL)


}

module.exports = db_connect;