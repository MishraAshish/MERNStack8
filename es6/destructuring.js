//a way to assign data without tracing from object to object and without intializing multiple variables

//Two Type of destructuring present
//1. Array Destructing
//a. basic assignments
//let [name, age, address, session] = ["padamaja", 23, "earth", ""]
// console.log(name)
// console.log(age)
// console.log(address)
// console.log(session)

//b.  default values

// let [name, age, address, session = "MERNStack"] = ["padamaja", 23, "earth", "ES6"]
// console.log(name)
// console.log(age)
// console.log(address)
// console.log(session)

//c. rest the variables

 let [one, two, three, ...restAll] = [1,2,3,4,5,6,7]

console.log(one)
console.log(two)
console.log(three)
console.log(restAll)


//d. swapping of variables

let morning = "sun", evening =  "moon";

[morning, evening] = [evening, morning] //swapping of variables
console.log(morning)
console.log(evening)
