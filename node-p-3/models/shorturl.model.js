const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Short_Url_Session = new Schema({
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
    }],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : auth_user
    }





    
    
},
{ timestamps  : true }
);

const URL_SESSION  = mongoose.model("url_session" , Short_Url_Session );

module.exports = URL_SESSION  ;