//operator : and, or, not

// &&, ||, !, ==, ===, !==, <, >, ? (ternary)

var age = 18;
var validCitizen = true;

//if (validCitizen || age == 18) {
if (validCitizen && age === "18") { //== compares values only but === compares type as well
    console.log("Allowed to vote")
}else{
    console.log("Not Allowed to vote")
}


//ternary operators
validCitizen && age === "18" ?console.log("Allowed to vote ternary") : console.log("Not Allowed to vote ternary");