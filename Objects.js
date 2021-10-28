//Objects : the basic building block of js can be recognised as memory space to hold values in key/value
// we can create object - {} or using the Object class

var user = {
    name : "Cynthia",
    age : 31,
    address : "Somwehre in Colorado",
    getUserDetails : function (params) {
        return { age : this.age, name : this.name}
    },
    getAddress : function (params) {
        return this.address;
    }
}

// console.log(user.getUserDetails());
 //console.log(user.getAddress()); 

//inheritance 
//1. by using the new keyword
// we should avoid this for as instead of making to separate objects it copies the same memory location to child

// var student = new Object(user);
// student.name = "Wei";
// console.log(student.getUserDetails()); 
// console.log(user.getUserDetails()); 

//2. by using the Object.create method
// this creates two different entities and child points to parent when property not available but parent is not updated

var student = Object.create(user);
student.name = "Wei";
console.log(student.getUserDetails()); 
console.log(user.getUserDetails()); 

console.log("student.__proto__ ", student.__proto__);

// overriding 
student.getUserDetails = function () {
    return "From Child " + this.name;
}

console.log(student.getUserDetails()); 


//merging two objects, with deep copy

var obj1 = {name : "MyName", age : 29, salary : 250}
var obj1_1 = {name : "MyName1", session:"MERNStack"}
var obj2 = {name : "YourName", address:"New City ", skills : "Javascript"}

obj1 = Object.assign(obj1, obj2, obj1_1);

console.log(obj1)
console.log(obj2)


//if we wish to break the prototype chain
//you need to pass null in your object create constructor

var nullProtoype =  Object.create(null);

console.log(nullProtoype.__proto__)

var emptyProtoype =  Object.create({});

console.log(emptyProtoype.__proto__)


// create a student object with details like - name, address, mobile, method - getName, getAddress
// override it with college student put some new properties like college etc, new method to return college and override getAddress
// give me example of no-prototype and merging of objects each.


var Person = {
    name : "Person I am",
    age : 25,
    getPersonDetail : function () {
        return ` Name ${this.name} Age ${this.age}`
    }
}

//console.log(Person.getPersonDetail())

var Student = Object.create(Person);
Student.Address = "Somewhere on earth";
Student.getAddress = function () {
    console.log(this.Address)
}

console.log(Student.getPersonDetail());
Student.getAddress();
