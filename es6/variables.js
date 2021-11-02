//ES5 - var : functional scope hoisted variable
//ES6 - let and const : block scoped variables or lexical variables

//1. var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting
// function name(params) {
//     var funcVar = "New Name";
// }

// console.log(funcVar)

// {

//     var funcVar = "Not a - Lexical Scope or Block Scope";
//     let lexicalLet = "Lexical Scope or Block Scope";
//     const lexicalConst = "Lexical Scope or Block Scope";
// }

//console.log(funcVar)
//console.log(lexicalVar)

//2. we can declare and assign var multple times, however let can be declared only once and can be assigned multiple times
// whereas const needs to be defined and declared at the same time and can't be reassigned again


// var funcVar = "can be assigned and declare multiple times"
// var funcVar = "can be assigned and declare multiple times 1"
// funcVar = "can be assigned and declare multiple times 2"
// console.log(funcVar)

//var lexicalLet = "ES6 new variable"

let lexicalLet = "ES6 new variable"
//let lexicalLet = "ES6 new variable" //Identifier 'lexicalLet' has already been declared

lexicalLet = "ES6 new variable 1"
//console.log(lexicalLet)

const lexicalConst = "ES6 new variable"

//const lexicalConst;// = "ES6 new variable" //SyntaxError: Missing initializer in const declaration
//const lexicalConst = "ES6 new variable" //SyntaxError: Identifier 'lexicalConst' has already been declared

//console.log(lexicalConst)

const User = {
    name : "Cynthia", 
    address : "Somewhere on earth" 
}

//User = {}; //TypeError: Assignment to constant variable.

//User.name = "Padmaja";
//console.log(User);


//3. let/const resolve issues due to functional scope hold with var

var index = undefined; //hoisting

for (index = 0; index < 5; index++) {
        setTimeout(() => {
            console.log(`index value ${index}`)//in case of var the value associated with it gets evaluated at the time of execution
        }, 1000);    
}
console.log(`index value ${index}`)



// for (let indexLet = 0; indexLet < 5; indexLet++) {

//         setTimeout(() => {
//             console.log(`index value ${indexLet}`) //in case of let the value associated with it get evaluated immediately
//         }, 1000);    

// }

//console.log(`indexLet value ${indexLet}`) //ReferenceError: indexLet is not defined
