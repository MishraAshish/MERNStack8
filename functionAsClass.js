//classes using function : we can use constructor function to make our function behave like a standard object oriented
//class object

// class User {
//     constructor();
//     getName();
//     getAddress();
// }
// User userObj = new User();

var User = function (name, age) {
    this.name = name;
    this.age = age;

    this.getUser = function () {
        return{
            name : this.name,
            age : this.age
        }
    }
}

var userObject = new User("Cynthia", 31)
userObject.session = "MERNStack";
userObject.getSession = function () {
    return this.session;
}
console.log(userObject.getUser())
console.log(userObject.getSession())
