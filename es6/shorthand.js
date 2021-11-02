// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow",
dog = "Woof",
bird = "Chrip",
lion = "roar";

let animalSoundES5 = {
    cat : cat,
    dog : dog,
    bird : bird,
    lion : lion
 }

 let AnimalSoundES6 = {
    cat,
    dog,
    bird,
    lion
}

//console.log("animalSoundES5 " + animalSoundES5) // [object object] 
console.log("animalSoundES5 " + JSON.stringify(animalSoundES5)) // casting a json object to string

console.log("AnimalSoundES6 ", AnimalSoundES6) // es6 automatically does json to stringfy with keys