const myNumbers= [1,2,3,4,5,6,7,8,9]

// const newNums=myNumbers.map((num)=>num+10)

// console.log(newNums);

// myNumbers.forEach((num)=>{
//     console.log(num+10);
// })

const apiData = [
    { id: 1, firstName: 'Alice', lastName: 'Smith' },
    { id: 2, firstName: 'Bob', lastName: 'Brown' },
];
const mn = apiData.map(user=>({
    ...user,
    fullName:`${user.firstName}${user.lastName}`
}))

console.log(mn);
const newData = apiData.map((user)=>(
    {
        userId:user.id,
        userName:`${user.firstName}${user.lastName}`
    }
))
console.log(newData);

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

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value} ) => ({ [key]: value }));
  console.log(reformattedArray);