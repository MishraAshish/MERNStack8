//problem - callback hell : due to un modularised or too many callbacks 

// function SigninSignUp(AuthenticationCallback, AuthorizationCallback, NavigationCallback) {
//     let ValidUser =  AuthenticationCallback(userid, password); //making a server call - ajax (in async)
//         if (ValidUser) {
//             let userRole = AuthorizationCallback(ValidUser); //making a server call - ajax (in async)            
//             //userRole.whatisTheOutput //success or failed -- promise
//             if (userRole) { 
//                 let nextPage = NavigationCallback(userRole) //making a server call - ajax (in async)
//             } else {
//                 //check again for the user validity
//                 SigninSignUp(...callbacks);
//             }
//         } else {
//             //send him on forgot password 
//         }
// }
// SigninSignUp(AuthenticationFunc, AuthorizationFunc, NavigationFunc)

let lunchPromise = new Promise((resolve, reject)=> {

    //lets make a waiting call to server using settimeout
    setTimeout(() => {
        resolve({
            "Promised By" : "Cynthia",
            "status" : "Success",
            "Lunch Attendees" : "Namrta, Estben"
        })
    }, 2000);

    //to reject
    setTimeout(() => {
        reject({
            "Promised By" : "Cynthia",
            "status" : "Rejected",
            "Lunch Attendees" : "Namrta, Estben"
        })
    }, 1000);    
})

console.log(lunchPromise)

lunchPromise.then((promise, error)=>{ //what has been happend to the promise // promise is resolved
    console.log("then ", promise)
    return JSON.stringify(promise) //can do some data manipulation
}).then((data)=>{
    console.log(data) //recieve manipulated data
})
.catch((error)=>{ //if promise fails //gets rejected
    console.log("catch ", error)
}).finally(()=>{
    console.log("Finally")
})

console.log(lunchPromise)