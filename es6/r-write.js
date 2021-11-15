//importing file system module in our code so that we can use it for accessing file
let fsObj = require("fs"); 

console.log("Read File using reader stream Starts");

//ReadFile using streams 
let readerStream = fsObj.createReadStream("./shorthand.js","utf8");
let data = "";

readerStream.on("data",(chunks)=>{
    console.log("chunks ", chunks)
    data = data+ chunks
})

readerStream.on("end",()=>{
    console.log("end ", data);
})

readerStream.on("error",(erroObj)=>{
    console.log("error ", erroObj)
})

console.log("Read File using reader stream end");

//Writing into a file using write stream

let userDetails = {
    name : "Yourui",
    age : 22,
    city : "New York",
    session : "MernStack"
}

let writerStream = fsObj.createWriteStream("./Text.json","utf8");

writerStream.write(JSON.stringify(userDetails));
writerStream.end();

writerStream.on("finish", ()=>{ //attached an event from eventemitter class
    console.log("Writing into the file is done")

    fsObj.readFile('./Text.json','utf8',(err, fileData)=>{ //error first call back : error will always be a first object when executes with node modules

        console.log("err", err);
        console.log(JSON.parse(fileData));
    
    });
})

writerStream.on("error",(erroObj)=>{
    console.log(erroObj)
})
console.log("Read File Ends Using Writer Stream");