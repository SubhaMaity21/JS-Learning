let score = "33"
let data = "subha"

let valueInNumber = Number(data)

console.log(typeof valueInNumber);

console.log(typeof score);

console.log(valueInNumber);

//then we try to forcefully try to convert anything into number then this happens =>>
//"33" => 33
//"subha" => NaN
//true => 1
// false => 0

let isLoggedIn = "subha"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
//"subha" => true
//"" => false

let someNumber = 45

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

