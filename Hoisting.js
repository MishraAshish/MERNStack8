//hoisting is the process of initializing var with undefined value and functions with complete definition
//this allows us to access them before declaration, some experts also term this step as compilation step
//1. variable hositing
//2. functional hositing

console.log(printName);
//console.log(printName("Cynthia")); //printName is not a function

console.log(sum(2,2)) //function hoisted with complete definition, so we can use it before declaration
console.log(myHoistedVar) // we'll get hoisted value here - undefined

var myHoistedVar = "some value";
//console.log(myHoistedVar) // some value // undefined - default value

// used for behaviours - keyword is function, name and then definition
function sum(param1, param2) {
    //definitions
    return param1 + param2;
}
console.log(sum(1,1))

// function expression : variable hoisting will happen for this
var printName = function (params) {
    console.log("Param Value "+ params)
}

//console.log(MyHoistedVar) : error : MyHoistedVar is not defined 

for (var index = 0; index < 5; index++) {
        setTimeout((index) => {
            console.log("index " +index)
        }, 1000);        
}

console.log("index " +index)