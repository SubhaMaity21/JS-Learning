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

// *********************  Operations *************************************



let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " subha"
let str3 = str1 + str2
console.log(str3);

console.log("2" + 3 +4);

console.log(2+ 4 + "4");

console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++
++gameCounter
console.log(gameCounter);

let x = 3;
const y = ++x
console.table([x,y])
/*
If used prefix, with operator before operand (for example, ++x),
the increment operator increments and returns the value after incrementing.

*/

let m = 5
const n = m++

console.table([m,n])
/* If used postfix, with operator after operand (for example, m++),
the increment operator increments and returns the value before incrementing.
*/