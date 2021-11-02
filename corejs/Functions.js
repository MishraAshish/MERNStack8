// JS is fully functional programming language : Functions are first class member citizens


// named function
function printName(name) {
    console.log(name)
}

//invoking a function to get output
printName("Wei");

// function expression
var printFuncExpression = function (name) {
    console.log(name)
}

printFuncExpression("Namrata");

//IIFE - Immediately Executable Function Expressions
(function name(params) {
    console.log(params)
})("IIFE - one time execution")

//name("Value") - name is not defined


(function ExecuteMe(params) {
    console.log("My params "+ params)
})("Estben")

// ExecuteMe("Padmaja")
// ExecuteMe("Super Hero 1")
// ExecuteMe("Estben ")

//nesting of functions
function A(params) {
    var a;
    //console.log(c) //can't access as accessibility is from top to bottom
    function B(params) {
        console.log(a)
        function C(params) {
            var c = ""
            console.log(a)
        }
    }    
}