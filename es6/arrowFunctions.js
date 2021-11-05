// Arrow functions are used for easing out the complexity of writing functions in javascript

//1. Easy way of writing functions like lambda expression

// function name(params) {
//     console.log("i am named function")    
// }
// name();

// used as functions expression
// let nameArrow = ()=>console.log("i am named arrow function!")
// nameArrow()

// let sum = (a,b)=>a+b;
// console.log(sum(4,5))

// let domultipleJobs = ()=>{
//     console.log("i am named arrow function!")
//     //job1
//     //job2
//     return "this completes multiple jobs here"    
// }
// console.log(domultipleJobs());

// //we can create IIFE as well with arrow functions
// ((a = 0,b = 0)=>console.log(a+b))(1,1)

//2. making a kind of replacement of bind

let User = {
    name : " Estban",
    age : 20,
    getDetails :  () => {
        console.log(`Outer Scope - Name ${this.name}  age ${this.age}`)

        //bind supplies the context whenever required
        setTimeout(function () {
            console.log(`Settimeout1 Name ${this.name}  age ${this.age}`)    
        }.bind(this), 1000)
        console.log(this)
        let that = this; //
        setTimeout(function () {
            console.log(`Settimeout1 -using that Name ${that.name}  age ${that.age}`)    
        }, 1000)


        //copies the context of parent as it is and solves the problem of context resolution
        setTimeout(() => {
            console.log(`Settimeout2 Name ${this.name}  age ${this.age}`)
        }, 2000);
    }
}


User.getDetails()