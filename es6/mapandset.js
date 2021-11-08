//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of short hand methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "This is a string type of key!");
myMap.set(keyObj, "This is a object type of key")
myMap.set(keyFunc, "This is a function type of key")
myMap.set(keyNum, "This is a numeric type of key");

//console.log(myMap.has(keyObj));
console.log(myMap.get(keyString));
console.log(myMap.get('a string'));
console.log(myMap.get(keyObj));
console.log(myMap.get({}));
console.log(myMap.get(function() {}));

console.log(myMap)
//myMap.clear() //to clear the map and get allocated space
myMap.delete(keyFunc)
console.log(myMap)

console.log(myMap.size)
myMap.set("array",["sda","asdas"])

console.log(myMap.size)

//create a map with name student add students, their timezones, session interested as keys


//Set : this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["Wei","Namrta","Esteben","Ciara","Cynthia","Yourui","Padmaja"]);

StudentSet.add("Wei")

console.log(StudentSet.values())

console.log(StudentSet.size)
console.log(StudentSet.keys())