const marvelHeroes = ['Thor', 'Ironman', 'Spiderman']
const dcHeroes = ['Batman' , 'Superman', 'Aquaman']
const rating = [1,2,3,4,5]

const arr = new Array(2,4,6,8,10);

//console.log(marvelHeroes);
//console.log(dcHeroes);
//console.log(rating);

const A = [5,10,15,20,25]
const B = [3,6,9,12,15]

marvelHeroes.push("Hulk"); // insert element in the end
//console.log(marvelHeroes);

const all_heroes = marvelHeroes.concat(dcHeroes);// concat return the new array , does not modify original array. If it does not assign in variable , data will be lost.
//console.log(all_heroes);

A.unshift(9); //insert element at beginning and shift all element to right.
//console.log(A);

//Spread Operator

const all = [...A,...B]; // (...) spread operator 
//console.log(all);

//includes

//console.log(A.includes(5)); // return true
//console.log(A.indexOf(100)); //return -1 if item not found

const real_another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
//console.log(real_another_array);
//const arr1 = real_another_array.flat(Infinity);
//console.log(arr1);

const num = [1,2,3,4,5];

const num_2 = num.slice(1,3); // return shallow copy and last index not included.
//console.log(num_2);

const even = [2,4,6,8,10];
const even_2 = even.splice(1,3);
//console.log("even => ",even); // last index included in splice
//console.log("even_2 => ",even_2); // original array also modified.

//To check is Array use isArray()

//console.log(Array.isArray(num)); //true
//console.log(Array.isArray("Shubham")); //false

//join method

const name = ["shubham"];
console.log(name.join()); // The join() method of Array instances returns a new string that is the concatenation of all elements in this array, separated by commas or a specified separator string. If the array has only one item, that item's stringification is returned without using the separator.


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
//console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9

//Array.from() method ==> The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
//Array.from() generates a brand new array from any iterable or array like object. It automatically splits strings char by char.

///console.log(Array.from("Shubham"));

const set = new Set(["banana","Apple","Grapes"])
console.log(set);
const arr_from_set = Array.from(set);
console.log(arr_from_set);
console.log(arr_from_set[2]);

//Objects in Array.from ??
console.log(Array.from({age: 23})); // it fails silently and return empty array because it doesn't know whether you want an array of keys or value.

//Array.of() ==> The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
// When you have multiple distinct variables and need to bundle them for mapping or storage, Array.of() instantly packages them into a new array.

let score = 100;
let score_2 = 200;
let score_3 = 300;

console.log(Array.of(score,score_2,score_3));



