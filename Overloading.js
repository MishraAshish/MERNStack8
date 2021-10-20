// Inheritance
// Abstraction
// Encapsulation
// Polymorphism - runtime, compile (Overriding, overloading)

//overloading : same name method with different signatures

Vaccination("dose1", "dose2", "dose3")

function Vaccination() {
    console.log("Nasal Spray")
}

Vaccination("dose1")

function Vaccination(dose1) {
    console.log("dose 1", dose1)
}

Vaccination("dose1", "dose2", "dose3")

function Vaccination(dose1, dose2) {
    console.log("dose 2", dose1, dose2)
}

Vaccination("dose1", "dose2")

function Vaccination(dose1, dose2, dose3) {
    console.log("dose 3", dose1, dose2, dose3)
}

Vaccination()

//there is no concept of overloading, we only have over writing, and whatever defined in last will govern