console.log("2" >1);
// don't compare same data type
console.log(null>=0);
console.log(null >0);
console.log(null == 0); //avoid this type of comparison
// when there is a comparisopn js converts null 
// into zero ,but when it's == it will notcovert nulli into zero


console.log("2"===2)
// its false as === mens strictly

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined >=0);
console.log(typeof undefined);