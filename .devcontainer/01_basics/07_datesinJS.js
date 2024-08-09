let myDate = new Date()
console.log(myDate); // 2024-08-09T19:13:55.427Z

//console.log(myDate.toString()); // Fri Aug 09 2024 19:13:55 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toISOString()); // 2024-08-09T19:13:55.427Z
//console.log(myDate.toJSON()); // 2024-08-09T19:15:52.360Z
//console.log(myDate.toLocaleDateString()); // 8/9/2024
//console.log(myDate.toLocaleString()); // 8/9/2024, 7:16:57 PM
//console.log(myDate.toDateString()) // Fri Aug 09 2024
console.log(myDate.toTimeString);


//console.log(typeof myDate); // object

//let myCreatedDate = new Date(2024, 9, 4)
//console.log(myCreatedDate.toDateString()); // Fri Oct 04 2024; omg months start with 0 omg
//let myCreatedDate = new Date(2024, 9, 4, 9, 15)
//let myCreatedDate = new Date("2024-01-12") // yy/mm/dd
let myCreatedDate = new Date("01-12-2024") 
//console.log(myCreatedDate.toLocaleString());

let MytimeStamp = Date.now()

//console.log(MytimeStamp); //1723232267182
//console.log(myCreatedDate.getTime()); //1705017600000
// apparently we can just compare the two but how?

//console.log(Math.floor(Date.now()/1000));    //but only date.now will give date in ms, to get in seconds, we simply divide by 1000


let newDate = new Date();
//console.log(newDate);
//console.log(newDate.getDay());
let highestDate = new Date("2023-12-05")
//console.log(highestDate.getMonth() + 1); // woohoo cuz it'll be 11 na, we add 1 and it becomes 12


newDate.toLocaleString('default', {
    weekday: "long"
})



