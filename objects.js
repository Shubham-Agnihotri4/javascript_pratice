//Object Literals
const obj1 = {}
//Using Constructor ==> create singleton
const obj2 = Object.create(null);
// console.log(obj1);
// console.log(obj2);

const student = {
    name : "shubham",
    'full name' : "shubham agnihotri",
    age : 27,
    location : "Delhi",
    College : "DU",
    Subject : ['Maths','DBMS','OS','TOC','CD'],
    email : 'shubh@du.in',
    isloggedIn : false
}

// console.log(student.name); // dot notation
// console.log(student["full name"]); // Bracket notation

//Symbol Trap 
//Goal : Define a Symbol and used it as an object key
const mySym1 = Symbol('key1')
const teacher = {
    teacher_name : "Raghav",
    teacher_email : "raghav@du.in",
   // mySym1 : "mykey1" ==> type become string
    [mySym1] : "mykey2"
}
//console.log(typeof teacher.mySym1); // string
console.log(teacher[mySym1]); // Symbol
//console.log(teacher);

teacher.teacher_email = "raghav@chatgpt.com";
//console.log(teacher.teacher_email);

//Object Freeze ==> When an Object is forzen, JavaScript silently ignored mutating attempts. No error is thrown in standard mode but data remains perfectly locked.

//Object.freeze(teacher);
//teacher.teacher_email = "raghav@gemini.com";
//console.log(teacher.teacher_email); // NO change in email after Object Freeze

//Inject function in Object

student.greeting = function(){
    console.log('Welcome in College');
    
}

console.log(student.greeting()); //Welcome in College ==> () Parentheses instruct the engine to RUN Code immediately.
console.log(student.greeting); //[Function (anonymous)] ==> return the REFERENCE  to the function in memory without executing it.

//Self Reference and Scope Context

student.greetingTwo = function () {
    console.log(`Hello Student, ${this["full name"]}`);
    
}

console.log(student.greetingTwo());

