//classes :  classes with syntax similar to java, .net 
//  -- are special type of functions in javascript that give us desired behaviour

// class SomeName {
//     constructor(){

//     }
//     someMethods(){

//     }
// }


class Vaccination 
{
    constructor(name, date, place) {
        this.name = name;
        this.date = date;
        this.place = place;
    }

    getSchedule(){
        return {
            name : this.name,
            location : this.place,
            date : this.date
        }
    }

    //Sqaure = () => this.length*this.length; //creating an arrow function    
    //Rectangle = () => this.length*this.width; //
}

let mySlot = new Vaccination("Some name", "7th Nov", 2021)
console.log("mySlot ", mySlot)