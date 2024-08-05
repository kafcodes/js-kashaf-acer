const name = "kashaf"
const repoCount = "12"

//console.log(name + repoCount + "value");
// using back tics = string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// strings are objects in java- also go thru the methods (additionally, operations/ecma as well = check the video )

const gameName = new String('friendly-cash-potato')


//console.log(gameName[8]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt('8'));
console.log(gameName.indexOf('c'));


const newString = gameName.substring(0, 4)
 console.log(newString);

// can't use negatives in substring, can in anotherstring
 
const anotherString = gameName.slice(-12, 4)
console.log(anotherString);

const newStringOne = "   kashaf   "
console.log(newStringOne);
console.log(newStringOne.trim()); //might wanna searc = trim javascript mdn

const url = "https://kashaf.com/kashaf%20fatima"

console.log(url.replace('%20', '-'))

console.log(url.includes('mom'))
console.log(gameName.split('-'));
