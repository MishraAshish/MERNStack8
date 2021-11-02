//EventLoop : all those calls which are expected to have delays due to 
//transactions taking time like settimeout, setinterval, server calls (XHR) or file read (async) 
//or any registered callback using Promises
//server - (XHR) XMLHttpRequest api used to make server call


console.log("Hi! Event Loop!")

setTimeout(function() {
    console.log("I am first call back")

    setTimeout(function() {
        console.log("I am first call back's callback")
    }, 1000); //0

}, 1000); 

setTimeout(function() {
    console.log("I am second call back")
}, 2000); //1000

setTimeout(function() {
    console.log("I am third call back")
}, 3000); //1000

console.log(`We did it!`)