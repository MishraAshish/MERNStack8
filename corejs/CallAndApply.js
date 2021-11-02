// Call : is the inbuilt method used to change the context of a function at runtime

sessionName = "MERNStack-a";
//sessionName2 = "MERNStack2"

var SessionInfo = {sessionName : "MERNStack", duration : "2 Months"}
var SessionInfo2 = {sessionName : "MERNStack2", duration : "2.5 Months"}

function GetName(isTrainerAvailable, trainerName) {
    console.log("Name "+ this.sessionName)
    console.log("Avialbility "+ isTrainerAvailable)
    console.log("trainerName "+ trainerName)
}

GetName.call(SessionInfo, "Yes", "Mr X") // using call we are able to change the object of context
GetName.call(SessionInfo2, "NO", "Mr Capital X")


// Apply : is the inbuilt method used to change the context of a function at runtime, but it accepts function parameters in array format

var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback}
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}

    `)
}
GetVehicleInfo.apply(BMW, ["Yes","5","4","Yes","China"])
GetVehicleInfo.apply(SomeCar, ["Yes","5","4","Yes","China"])




// setTimeout(function (){
//     console.log("this - ", this)
// }, 1000); //waiting time in milliseconds

// function name() {
//     console.log("this in name function- ", this)
// }
// name();

// var User = {
//     name : "Wei",
//     getName : function () {
//         console.log("this User object - ", this)
//     }
// }
// User.getName()



// Namrata - Basics, Operators, Hoisting, DataTypes
// Ciara - Literals, Objects, FunctionsAsClass
// Cynthia - Functions, Overloading, CallBackAndNesting 
// Wei - Closures, CallAndApply