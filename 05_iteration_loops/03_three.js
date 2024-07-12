// for of 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
   if(greet===' '){
    continue;
   }
    console.log(`Each chaector is  ${greet}`)
    
}

//map

const map = new Map()
map.set("In","India")
map.set("USA","United States of America")
console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key,value] of map) {
    console.log(key);
    console.log(value);
}

const myObj ={
    "game1":"Subway Surfers",
    "game2":"Temple Run"
}

// for (const [key,value] of myObj) {
//     console.log(key,":",value);
// }      


// this method will not work using for...of

//but but the cheatcode is -

for (const [key,value] of Object.entries(myObj)) {
    console.log(key,':',value);
}