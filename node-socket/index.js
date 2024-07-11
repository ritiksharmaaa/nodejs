const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
// from  webscoet we require a http module because we have to attach ws to http

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
//     emit recive from client 
     socket.on('user-message' , (message) =>{
        // console.log(message) we have to send this data to outher client user 
        io.emit("message" , message )

     })

  // socket mean an individual user // where we write socket client ean is same but term is called socket ..
  console.log(
    "log each socket id connection  - socketId : ",
    socket.id
  ); // each connection have there own socket id .
});

app.get("/", (req, res) => {
  // console.log(" i am running !")
  res.sendFile(path.resolve("./public/index.html"));
});

server.listen(8000, "localhost", () =>
  console.log("server is listin on port 8000 : http://localhost:8000")
);
