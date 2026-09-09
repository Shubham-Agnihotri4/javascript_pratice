//primitive data types

let name = "Shubham";
const age = 27;
const lightSpeed = 299792458n;
const id = Symbol('123');
let isBoolean = true;
let temp = null;
let qualification = undefined;

console.table([name,age,lightSpeed,id,isBoolean,temp,qualification]);

console.log("typeof name is",typeof (name)); //string
console.log("typeof age is",typeof (age)); //number
console.log("typeof lightSpeed is",typeof (lightSpeed)); //bigint
console.log("typeof id is",typeof (id)); //symbol
console.log("typeof temp is",typeof (temp)); //object
console.log("typeof qualification is",typeof (undefined)); //undefined


//Non Primitive DataTypes

let marvelHeroes = ['spiderman', 'batman', 'thor'];
let student = {
    name : 'shubham',
    age : 27,
    marks : 75,
}

const myFunc = function() {
    console.log("Hello JavaScript");
}

console.log(marvelHeroes);
console.log(student);
myFunc(); //calling function

console.log("typeof marvelHeroes is",typeof (marvelHeroes));//object
console.log("typeof student is",typeof (student));//object
console.log("typeof myFunc is",typeof (myFunc));//function typically object function


