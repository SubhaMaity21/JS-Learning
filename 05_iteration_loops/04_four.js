const myObj ={
    js:"Javascript",
    cpp:"C++",
    sft:"Swift"
}

for (const key in myObj) {
    // console.log(key);
    console.log(`${key}:${myObj[key]}`);
}

const myArr =["JS","C++"]
for (const key in myArr) {
   console.log(myArr[key]);
}

// in the for..of loop we are getting direct values but here we are getinng only keys

const map = new Map()
map.set("In","India")
map.set("USA","United States of America")
// console.log(map);

for (const key in map) {
    console.log(key);
}