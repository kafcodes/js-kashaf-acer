//console.log("2" > 1);
//console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// null > 0 is false and >=0 is false
// null == 0 is false 
// comparisons turn null into 0 (treating like a number)
// equality check does not

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// all 3 are false- also avoid these cuz these arent examples of a clean code  

// === (strict check)

console.log("2" == 2);
console.log(undefined == 0);