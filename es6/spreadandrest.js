//spread operator : spreads the array in conservational manner, we also use it for the shallow copy of objet arrays

let arrayOFCities = ["Rome", "New York", "New Delhi", "London"];
//console.log(...arrayOFCities)

function add(x = 0, y = 0, z = 0){
    //console.log("this + scope + context + execution context ", this)
    return x+y+z;
}

let array = [5,6,8];

console.log("Using Spread " + add(...array))
console.log("Using Apply " + add.apply(null ,array))

//rest parameters : it the reverse of spread, but used in function to accept parameters, this should be the last param

function sum(...params){
    
   let summ = params.reduce((prevValue, currentValue)=>{
        return prevValue+currentValue;
    },0);

    return summ;
}
let newArr = [3242,32423,23423,32423,23423,434234,32423,423423423,423,423,4234,23423,423,423,423,423];
console.log("Using Rest " + sum(...newArr))

let newArr1 = [4,5,7,8,9,2,6];
console.log("Using Rest " + sum(...newArr1))

//please create a function to add values from 1 to 999 (n), using rest and spread