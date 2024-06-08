let myDAte = new Date()
// console.log(myDAte)
// console.log(myDAte.toString());
// console.log(myDAte.toDateString());
// console.log(myDAte.toISOString());
// console.log(myDAte.toJSON());
// console.log(myDAte.toLocaleDateString());
// console.log(myDAte.toLocaleString());
// console.log(myDAte.toLocaleTimeString());
// console.log(myDAte.toTimeString());
console.log(myDAte.toUTCString());
console.log(typeof myDAte);

newDAte = new Date(2024,5,12,9,40)
// newDAte = new Date("2024-01-14")
// newDAte = new Date("01-14-2023")
console.log(newDAte.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newDAte.getTime()); //to get time to milisec

// console.log(Math.floor(Date.now()/1000));

let anotherDate = new Date(Date.UTC(2024,3,23,5,40))
console.log(anotherDate.getFullYear());

let varDate = anotherDate.toLocaleString('en-IN'
   
)

console.log(varDate);