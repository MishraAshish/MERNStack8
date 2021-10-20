//console.log("Hello world from javascript console - node js")

var session1Name = "MERNStack";

console.log("session1Name", session1Name)
console.log("typeof session1Name", typeof session1Name)

session1Name = 199.5; //dynamic typing and dynamic casting

console.log("session1Name", session1Name)
console.log("typeof session1Name", typeof session1Name)

session1Name = true

console.log("session1Name", session1Name)
console.log("typeof session1Name", typeof session1Name)

session1Name = {name: "Some Name", age : "999"} //new Map(); //object

console.log("session1Name", session1Name)
console.log("typeof session1Name", typeof session1Name)


session1Name = undefined //default value in javascript

console.log("session1Name", session1Name)
console.log("typeof session1Name", typeof session1Name)

session1Name = null // datatype is Object

console.log("session1Name", session1Name)
console.log("typeof session1Name", typeof session1Name)

//symbol data introduced in ES6


mySym = Symbol("New Value");
console.log("Symbol ", mySym);
console.log("TypeOf Symbol ", typeof mySym);