// Two types of data types- based on how data is stored in the memory and accessed
// Primitive (call by value-we make changes in their copies)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Dynamic or Static 
// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don’t need to declare the data type of a variable explicitly.

// let x = 5; // x is a number
//x = "Hello"; // x is now a string
//x = [1, 2, 3]; // x is now an array

// also a weak language- because it carries out implicit type coercion e.g. it'll add a num = 5 to a str = "10" and give 510. (unexpected results)

// Reference (Non-Primitve) - he said: 'Reference can be directly allocated

// Array, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail; // or could write const userEmail = undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // answer = false :)

const bigNumber = 98839372288949498372200874n 

console.log(typeof bigNumber);

const heroes = ["Wolverine", "Spiderman", "Batman"];
let myObj = {
    name: "Kashaf", 
    age: 20,
}

const myFunction = function (){
    console.log("Hello world");
    
}

//console.log(typeof myFunction); // gave 'function' but apparently it's object function
//console.log(typeof myObj);

//console.log(typeof heroes); // gave 'object' 
// he said: all the non-primitive ones have 'function', but function itself returns 'object function'

//console.log(typeof id); // symbol ofc

//console.log(typeof myObj); // object

//console.log(typeof outsideTemp); // 'null' object 


// ++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) changes in copies
// Heap (non-primitive) changes in original values- cuz the ref is same


let myYoutubename = "kashaffatima.com"

let anothername = myYoutubename
anothername = "fatimakash.com"
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@yahoo.com"
}

//let userTwo = userOne

let userTwo = {
    email: "kashaf@google.com"
}

console.log(userOne.email);
console.log(userTwo.email);
// but like- when we do not equate the two- it doesn't give the same reference email 