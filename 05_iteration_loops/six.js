
//           Filter

const myNums = [1,3,5,6,4,8]

// const newNum = myNums.filter( (num) =>
//     num > 5
// )
const newNum = myNums.filter( (num) => {
   return num > 5
}
)

//when using scope by {} has to use return

console.log(newNum);


// const newNums = [1]
// const nums =[4,6,7,8]

// nums.forEach((obj)=>{
  
//     if(obj>4){
//         newNums.push(obj)
//     }
// })

// console.log(newNums);

const books =[
    {
        name:"one",genre:"romance",published:1988,latestEdition:2005
    },
    {
        name:"two",genre:"fiction",published:1970,latestEdition:2015
    },
    {
        name:"three",genre:"non-fiction",published:1980,latestEdition:2008
    },
    {
        name:"four",genre:"horror",published:2000,latestEdition:2020
    },
    {
        name:"five",genre:"comedy",published:1989,latestEdition:2019
    },
    {
        name:"six",genre:"comedy",published:1967,latestEdition:1999
    }
]

// const userBooks = books.filter( (bk)=>bk.genre==="comedy")
const userBooks = books.filter( (bk)=>bk.latestEdition>2000&&bk.genre==="comedy")

console.log(userBooks);
