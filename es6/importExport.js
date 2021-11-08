// export and import : ES6

//we assume that file in which we defined variables is constants.js

export const pi = 3.1415926; // named export
export const phy = 3.39415926;

import {pi, phy} from "/constants"; // named import

// module.exports = {
//     pi,
//     phy
// }
//let constants = require("/constants.js") 
//constants.pi
//constants.phy

//only default export is allowed from a module
export default class Constants {
    //doing some stuffs
}

import Constants from "/constants"; // default import

import Constants, {pi, phy} from "/constants"; // default import and named imports

//constants2.js"

export const pi = 6.28; // named export
export const pi1 = 6.28; // named export
export const pi2 = 6.28; // named export
export const pi3 = 6.28; // named export
export const pi4 = 6.28; // named export
import {pi as pi2 } from "/constants2"; // named importing by aliasing

//import {pi1, pi2, pi3, pi4 } from "/constants2"; // named importing by aliasing
import  * as AllConstants  from "/constants2"; // importing everything
//AllConstants.pi2
//AllConstants.pi3