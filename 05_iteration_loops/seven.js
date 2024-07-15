const myNumbers= [1,2,3,4,5,6,7,8,9]

// const newNums=myNumbers.map((num)=>num+10)

// console.log(newNums);

// myNumbers.forEach((num)=>{
//     console.log(num+10);
// })

const newNums =myNumbers.map((num)=>num*10).map((num)=>num+1)
function isComposite(num) {
    if (num <= 1) {
    return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
    return true;
    }
    }
    return false;
    }
    
console.log(newNums.filter(isComposite));