//synchronous-io and asynchronous-io operations

let fsModule = require("fs");


//sync-io : this will block the code untill its execution gets completed

console.log("Starting Sync File Read!")

//console.log(__dirname)
//console.log(__filename)

let data = fsModule.readFileSync(__dirname+"\\classes.js","UTF-8"); //blocking io
console.log("File Data ", data)
console.log("End Sync File Read!")

//async execution of code - non-blocking io

console.log("Starting async File Read!")

fsModule.readFile("./classes.js","utf-8",(error, data)=>{ //non-blocking IO
    console.log("File Data ", data)
    console.log("File error ", error)
})

console.log("Ends async File Read!")

//NodeJs executions cycle
//REPL - Read Evaluate Print and Loop
for (let index = 0; index < 1000000; index++) {
    console.log(index)    
}

//to stop the loop - ctrl+c+c