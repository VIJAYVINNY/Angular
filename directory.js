const fs=require('fs');
// console.log(fs);
// fs.mkdir("preethi",(err,data)=>{}); // to make a new directory

// fs.rmdir("preethi",(err,data)=>{}); // to remove the directory 

// fs.unlink("preethi.txt",(err,data)=>{}); //to remove the text file 

const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("node js demo");
    res.end("Server created:") //res =responce
})

server.listen(1111,()=>{
console.log("Demo Server created");
})
// const server=http.createServer((req,res)=>{
// console.log("Mydemo server created");
// })