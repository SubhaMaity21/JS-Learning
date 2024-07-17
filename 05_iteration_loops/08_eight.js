const myNums =[1,4,5,3,4]
const myTotal =myNums.reduce((acc,cur)=>{
    // console.log(acc,cur);
    return acc + cur
},0)

console.log(myTotal); // is used to calculate total easily

const shoppingCard =[
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"App Dev",
        price:599
    },
    {
        itemName:"data science",
        price:899
    }
]



const totalVal =shoppingCard.reduce((acc,item)=>acc +item.price,0)
console.log(totalVal);

const text = "hello world hello everyone";
const words = text.split(' ');

const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
     return acc;
}, {});

console.log(wordCount);
// Output: { hello: 2, world: 1, everyone: 1 }
