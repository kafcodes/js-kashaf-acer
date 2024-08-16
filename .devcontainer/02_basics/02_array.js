const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "falsh", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'falsh', 'batman' ] ]
// array kinda considered the pushed array as an element itself

//so we if we wanna access something in the fourth element e.g. superman, then it'll be like:
//console.log(marvel_heros[3][0]);


;
// becus it says that it'll return a new array, therefore, we need to give it a new variable to store the new array in
//const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros) [ 'thor', 'Ironman', 'spiderman', 'superman', 'falsh', 'batman' ]

// spread: like a glass breaking and all its pieces dispersing
//const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'falsh', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_array = [another_array.flat(2)] // either use depth number, or infinity
console.log(usable_array);

console.log(Array.isArray("kashaf")); // false ofc
console.log(Array.from("kashaf")) // converts into [ 'k', 'a', 's', 'h', 'a', 'f' ]
console.log(Array.from({name : "kashaf"})) // interview q, will return empty array, becuz we gotta specify if you wan convert only values into arrays or the keys 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
