const marvel_heros =["thor","ironman","spiderman"]

const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);//not a right way to merge things

// newHero = marvel_heros.concat(dc_heros)
// console.log(newHero);

const allHeros = [...marvel_heros,...dc_heros] //'...' means spreading
console.log(allHeros);


const another_array = [1,2,[3,4,5],6,4,[2,5,[3,9],8]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// this is the easy method for simplify arrays



console.log(Array.isArray("Subha"))
console.log(Array.from("Subha"))

console.log(Array.from({name:"Subha"})) //interesting !!

let  score1 = 200
let  score2 = 234
let  score3 = 534

console.log(Array.of(score1,score2,score3));

// Array.isArray(new Array());
// Array.isArray(new Array("a", "b", "c", "d"));

// console.table([Array.isArray(new Array()),
// Array.isArray(new Array("a", "b", "c", "d"))])


