const http=require('http');

const{url}=require('inspector');
// const server=http.createServer((req,res)=>{
//     console.log("node js demo");
//     res.end("Server created:") //res =responce
// })

// server.listen(1111,()=>{
// console.log("Demo Server created");
// })

const server=http.createServer((req,res)=>{
      console.log("Request made by:",req.url);
      res.writeHead(200,{'Content-type':'text/plan'});
      res.end("Hello student");
    });
