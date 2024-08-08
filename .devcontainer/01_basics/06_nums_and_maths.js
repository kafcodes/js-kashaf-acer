const score = 400 
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 1123.8966

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); // this gives = 1,000,000
//console.log(hundreds.toLocaleString('en-IN')); // this gives 10,00,000
// +++++++++++++ Maths ++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); Ans 5 = cuz highest, regardless
// console.log(Math.floor(4.9)); Ans 4 = cuz lowest 
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
// console.log(Math.pow(2, 5))

console.log(Math.random()); 
// but if the values can only be from 0-1, what about games like ludo etc which need 1-6 ;)
console.log((Math.random()*10) + 1); 
// adding 1 to avoid scenarios where the random number is smth like, 0.067....
console.log(Math.floor(Math.random()*10) + 1);


const min = 10 
const max = 20

console.log(Math.floor((Math.random(max - min) * 10) + 1) + min) 
// what I wrote and it works too lol

console.log(Math.floor(Math.random() * (max - min + 1)) + min )
// this is giving both 10 and 20 
