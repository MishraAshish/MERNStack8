//Execution in javascipt uses Stack like other languages and this format is LIFO : Last In First Out
//call stack : LIFO - last in first out
//call stack visualization upto and extent

// function foo() {
//     throw new Error("Foo is not a good function"); 
// }

// function bar(){
//     foo(); //calling or invoking foo
// }

// function baz(){
//     bar(); //calling or invoking bar
// }


// baz(); //the first entry to callstack



// blow up the callstack

function blowingUp() {
    blowingUp()
}

blowingUp()