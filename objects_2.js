const tinderUser = new Object(); //singleton object
const instaUser ={} //non singleton object
// console.log(tinderUser);
// console.log(instaUser);

//Property Injection in Object
//Objects are mutable. You can insert new keys and values on the fly without redeclaring the variable.
instaUser.id = "Shubh_44";
instaUser.name = "Shubham";
instaUser.isLoggedIn = false;
//console.log(instaUser);

//Nesting Objects
const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            fistName : "Shubham",
            lastName : "Agnihotri"
        }
    }
}
//console.log(regularUser.fullName.userFullName.fistName);

//assign method in Object ==> The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'c',
    4: 'd'
}

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
//Spread Operator
const obj3 = {...obj1,...obj2};
//console.log(obj3);

//Array of Objects
const users = [
    {
        id: 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "s@gmail.com"
    }
]

//console.log(users[0].email);

// Database responses arrive as Array of Objects. 
//console.log(instaUser);

// console.log(Object.keys(instaUser)); // Array of keys
// console.log(Object.values(instaUser)); // Array of values

//Object.entries()==> convert entire object into Array of Arrays.
//console.log(Object.entries(instaUser));

//console.log(instaUser.hasOwnProperty('isLogged')); // It verifies key existence before runtime. It prevents crashes while parsing unpredictable API payloads.


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

//course.courseInstructor
const {courseInstructor: instructor} = course //Object destructure
console.log(courseInstructor);

//API concepts
//JSON = Javascript Object Reference
// {
//     "name": "hitesh",
//     "courseName" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]



