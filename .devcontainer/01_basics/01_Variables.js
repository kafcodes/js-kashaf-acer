const accountId = 1144553
let accountEmail = "lamagoogle@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState; 
// accountId = 2 // not allowed 




accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Karachi"

/*
Prefer not to use var
because of issue in block scop e and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])