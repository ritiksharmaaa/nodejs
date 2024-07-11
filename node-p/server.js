const http = require("http")
const fs = require("fs")
const url = require ("url")


//  url node nod extact data from query we ave to exart it bydefault or use other packages .
//  we are useing url - node url 






const Server = http.createServer((req , res)=>{
    // req is object came from client what request it send by user 
    // res is object which we are sending dat to user 
    console.log("new Request receive")
    const log = `${Date.now()} : new Request Recieved : ${req.url} \n`
    const MYurl = url.parse(req.url ,true)
    // true mean it case parse also query parameter myurl i sobject and we can extract the query
    console.log(MYurl)
    fs.appendFile("./server-log.txt" , log , (err , result)=>{
        res.end("hellop form server")

    } );
    // console.log(req.headers)
    // routing 
    switch(req.url){
        // switch based on url.path
        case '/' :if (req.method =="GET") {
            
                 res.end(" welcome to home page ");
        }
        if (req.method == "POST") {
            // db query
            res.end(" welcome home and method is post ")
            
        }
        break
        case '/about' : res.end("about page !");
        break 
        case '/contact' : res.end("contage page !")
        break 
        default :
        res.end("404 not found !")
    }

    // cres.end("hellop form server")
    

});

Server.listen(8000 , "localhost" , () => console.log("server started on port 8000......."))