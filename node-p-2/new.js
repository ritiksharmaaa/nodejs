const express = require("express");
// const mongoose = require("mongoose")
const URL= require("./models/shorturl.model");
const db_connect = require("./db_connect");
const urlRouter = require("./routes/url.router");
// const shortID = require('shortid') no need just import it

// require("dotenv").config()

db_connect()
  .then(() => {
    console.log("db Connected");
  })
  .catch((error) => {
    console.log(error, "error from db ");
  });

const port = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/url", urlRouter);
app.get("/redirect/:Id", async (req, res) => {
  const shortId =req.body.Id
  console.log(shortId, "short id cameeeeeeeeeeee")
  const entry = await URL.findOneAndUpdate(
    {
      shortId,

    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true } ,
  );
  
  
  
  console.log("URL from database after caching delete :", entry.redirectURL);
  // Ensure entry.redirectURL is valid before redirecting
  if (entry.redirectURL) {

    // big mistake found that we need url not domain name 
    res.redirect(301 , entry.redirectURL);
  } else {
    console.error('Redirect URL not found in document:', entry);
    res.status(500).send('Redirect URL not found');
  }
});

// app.get("/", (req , res)=>{

//     res.end("i am running well ")
// })

app.listen(port, "localhost", () =>
  console.log("server running on port 8000 .....")
);
