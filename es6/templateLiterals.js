//we use back tick to create html literals and make our content precise 
// dynamic variable can be included using - ${dynVal}

let animalSoundES6 =  require("./shorthand");

//below the ESC - backtick `

let dynVal = 2546;

// let myNormalString = "Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum "+dynVal+" Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum";
// console.log(myNormalString)

let templateLit = `Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        Lorem Lipsum Lorem Lipsum Lorem Lipsum ${dynVal}
                        Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        Animal Sounds - ${JSON.stringify(animalSoundES6)}
                        Animal Sounds - ${animalSoundES6}`
console.log(templateLit)