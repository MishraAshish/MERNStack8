// Literals : are key value pair of objects that give us a reference pointer to an object and 
//allow us to save memory space

// var userName = "Namrta";
// var age = 22;
// var address = "Somewhere in India";

// var userName2 = "Ciara";
// var age2 = 21;
// var address2 = "Somewhere in US";

var user = {
    name : "Cynthia",
    age : 31,
    address : "Somwehre in Colorado"
}

//console.log("User "+ JSON.stringify(user))
console.log("User ", user)

var user2 = {
    name : "Wei",
    age : 29,
    address : "Somwehre in Indiana"
}

console.log("User ", user2)


user.name = "Ciara";
console.log("User ", user)


console.log("User2 Age ", user2.age)