let score = undefined

//console.log(typeof score);
//console.log(typeof (score));
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);
// using 33abs gives 'not a number NaN'; this is when it converts a non-number into a number //
// using null gives 0 //
// undefined also gives NaN //

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false
// "kaf" => true 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);