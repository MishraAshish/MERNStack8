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

//let [one, two, three, ...restAll] = [1,2,3,4,5,6,7]
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(restAll)


//d. swapping of variables

//let morning = "sun", evening =  "moon";
// [morning, evening] = [evening, morning] //swapping of variables
// console.log(morning)
// console.log(evening)


//2. Object Destructuring

// assume below object you are going to get from an api (getstudent)
let Student = {
    name : "Yourui",
    id : 21,
    subjects : { 
        maths : 25,
        chemistry : 26,
        biology : 27
    },
    hostel : "some hostel",
    room : 209
}

// let name = Student.name;
// let maths = Student.subjects.name;
// let chemistry = Student.subjects.name;
// let physics = 26;

let {name, subjects:{maths, chemistry, physics = 29}} = Student;

console.log(name)
console.log(maths)
console.log(chemistry)
console.log(physics)


//question :

let Student = {
    firstname : "Put your name",
    address : " ??",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}

//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in student