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

const newF = "S -ubha "
const ben = "শুভ 😂"
let num = 1
console.log(`I love  ${newF.at(num)}`)

console.log(newF.big()) //for creating html code <big> , although it is not used in modern programing

console.log(newF.bold());
console.log(newF.charAt(2));
console.log(newF.charCodeAt(4));
console.log(ben.charCodeAt(5));
console.log(newF.charCodeAt(0));
console.log(newF.codePointAt(0));
console.log(newF.isWellFormed());

const icons = '𐒷☃★♲';

console.log(icons.charCodeAt(0));
console.log(icons.codePointAt(0));

const arr1 = ["s","u","b",2]
const arr2 = [3,4,6,"u"]
console.log(arr1.concat(arr2));
console.log(arr1.concat(1,2));

const value = ["a","b"]

for(const [index,elements] of value.entries()){
    console.log(index,elements);
}

str = "Subha"
striSplit =str.split('')
console.log(striSplit);

const newStr = 'Cats are the best!';
console.log(newStr.length);
console.log(newStr.endsWith("the",12));//true
console.log(newStr.endsWith("best."));//false

const newSentence = "he plays well"
const newWord =  "well"
console.log(newSentence.includes(newWord) ? 'is':'is not');






