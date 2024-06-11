const myArr = [0,1,2,3,4]

const myHeros = ["Shaktiman","Hanuman","Balvir"]

console.log(myArr[0]);

//Array methods

// myArr.push(6)
// console.log(myArr);

// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr); //eliminates the last eliment

// myArr.unshift(5) //adds eliment in the first index
// console.log(myArr);
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(9));

// console.log(myArr);

const newArr = myArr.join()
// console.log(typeof newArr); //string
// console.log(typeof myArr); //object


//slice,splice
console.log("A",myArr)

my1 =  myArr.slice(1,3)
console.log(my1);
console.log("B",myArr);

my2 = myArr.splice(1,3)
console.log(my2);
console.log("C",myArr);

//in Slice the last range/limit does not print,and the Array remains unchanged

// in slice the last range/limit prints. and those indexes will be out of the  Array 


