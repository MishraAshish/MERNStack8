//Closures : 
//encapsulation in JS : we decide what props and methods are accessible to the outer world
//closure : we have parent child relation where parent function returns a child and the space between them
// can be used as public or private, thus givin us an encapsulation like behaviour


function Parent(name, age) {
    var name = name; //public
    var age = age; //public
    var accountBalance = "$1000"; //private
    var accountPin = "23xyzn9"; //private
    var accountType = "saving"; //public

    var Child = function (address, isAdmin) {

        return {
                    //name : name // shorthand while using es6 we can use only one of it, if the key and the variable name both are same
                    name,
                    age,
                    accountType,
                    address
            }
    }

    return Child;
}

var parentObj = Parent("Ciara",21);

//console.log(parentObj)
console.log(parentObj("Somewhere on earth", false))

// pass the isAdmin and depending upon true or false : if true then return pin and amount as well
// create a closure with an example of person being parent and student being child

function AccountParent(name, accountNum) {
    var AccountName = name; //public
    var AccountNumber = accountNum; //public
    var AccBal = "$20000" //
    var AccPin = "54sa5d4as" //private


    var ChildAcc = function (AccType, isAdmin) {
        return {
            AccountName, //short hand - AccountNumber : AccountNumber,
            AccountNumber,
            AccType,
            AccBal
        }
    }

    return ChildAcc;
}

var parentObj = AccountParent("Padmaja", "5156565656")

console.log(parentObj("Savings", true))