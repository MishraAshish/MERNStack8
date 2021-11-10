// function TestMe(params) {
//     console.log(params)
// }
// TestMe("Params")//invoking or calling
// TestMe("Params 2")

// A generator function is a function that can be yeilded as many times as possible upon single invocation

//Generator Functions: Allows us to get multiple yields (or kind of returns) for the indefinite number of times
// without creating and invocation of the function

function *PrintData(num) {

    //do any asyn operation to read the value
    let updatedValue = 300;

    yield num+updatedValue;
    yield num-updatedValue;
    yield num*updatedValue;
    yield num/updatedValue;

    return "Some Value";
}

let obj = PrintData(1500)

console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())


//arithmaticCalculator using - generator function - (a,b), 
//add, subtract, multiply, divide - all this we need to yield
//Arithmatic Calculator

function *arithmetic(num1, num2){
    
    yield console.log("Addition : " + (num1+num2));
    yield console.log("Subtraction : " + (num1-num2));
    yield console.log("Multiply : " + (num1*num2));
    yield console.log("Division : " + (num1/num2));
    
    return "Done";
}
let calObj = arithmetic(6,2);

calObj.next()
calObj.next()
calObj.next()
calObj.next()
console.log(calObj.next())
console.log(calObj.next())

let calObj1 = arithmetic(78599,25);

calObj1.next()
calObj1.next()
calObj1.next()
calObj1.next()