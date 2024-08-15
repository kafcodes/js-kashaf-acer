// array - mutable(changeable)

const myArr = [0, 1 ,2, 3, 4, 5,] // can have different elements too- like string, boolean

const myHeros = ["loki", "Thor", "Hela"]
const myArr2 = new Array(1, 2, 3, 4, 5)

//console.log(myArr[1])

// Array methods

//myArr.push(6) adds at the end
//myArr.pop()
//myArr.unshift(0) // adds at the beginning, but it is not that nice 
//myArr.shift() // just removes the first element

//console.log(myArr.includes(87)); // answer is false 
//console.log(myArr.indexOf(12)); // answers -1 if not present 
//console.log(myArr.indexOf(5));



//const newArr = myArr.join()
//console.log(myArr);
//console.log(typeof newArr); // string

// slice, splice 

console.log("A ", myArr);

const new1 = myArr.slice(1, 3)
console.log("A", myArr);

console.log("B", new1);

const new2 = myArr.splice(1, 3)
console.log("C", new2);
console.log(myArr);

// diff b/w slice and splice;
// slice returns those index positions specified by the range, leaving the last one e.g. [ 1, 2 ], when the command was (1, 3)
// splice returns those index positions included in the range, subtracting them from the original 


