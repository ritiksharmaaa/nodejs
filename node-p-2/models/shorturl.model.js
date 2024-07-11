const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Short_Url_Schema = new Schema({
    shortId : {
        type : String ,
        required : true ,

    },
    redirectURL : {
        type : String ,
        required : true ,

    }
    ,
    visitHistory : [{
        timestamp : {type  : Number}
    }]
    
    
},
{ timestamps  : true }
);

const URL = mongoose.model("url" , Short_Url_Schema );

module.exports = URL ;