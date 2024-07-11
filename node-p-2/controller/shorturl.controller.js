const URL= require('../models/shorturl.model')
// const { nanoid } = require("nanoid") not working 
const shortID = require('shortid')

async function  generateShortUrl(req , res){
    const body = req.body
    console.log(body.url)
    if (!body){
        return res.status(400).json({error  : "path is require "})
    }

    // const shortID = nanoid(8)
    const shortid = shortID()
    await URL.create({
        shortId : shortid ,
        redirectURL : body.url,
        visitHistory : []
    });

    return res.status(200).json({status : "shortID genrated succefully "})

}


// redirect url 


async function redirectUrl(req , res){
    // const shortID = req.params.

}

module.exports = {
    generateShortUrl ,
}