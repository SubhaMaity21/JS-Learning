const name ="subha"
// const repoCount = "50"

// console.log(`Hello my name is ${name}`);

const gameName =new  String('Sub-ha')
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));
const newGame = gameName.substring(0,3)
console.log(newGame);
const anotherString = gameName.slice(-4,4)
console.log(anotherString)

const newString ="   Subha  "
console.log(newString);
console.log(newString.trimEnd());
console.log(newString.trimStart());

const url ="https://subha.com/subha%20maity"
console.log(url.replace("%20","-"));
console.log(url.includes("s"));
const friendName = "Joy-deep-mon-dal"
console.log(friendName.split("-"));

console.log(url.anchor("hello"))//this is not used in modern developement

const newF = "Subha"
let num = 1
console.log(`I love  ${newF.at(num)}`)