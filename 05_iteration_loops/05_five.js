const coding =["JS","C++","python"]

// coding.forEach( function (item){     //here it sends the values of the array as a parameter
//     console.log(item);
// }    )

// coding.forEach( (item)=>{
//     console.log(item);
// })

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)    //very interisting here we directly reffered an existing function

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })

myCoding =[
    {
        langName:'Javascript',
        langFile:"JS"
    },
    {
        langName:'python',
        langFile:'Py'
    },
    {
        langName:'Swift',
        langFile:'Sft'
    }
]

myCoding.forEach((item,index)=>{
   
    console.log(item.langName,"=>",item.langFile);
    

})


myCoding.forEach((item,index)=>{
   if(index<2){
    console.log(item.langName,"=>",item.langFile);
    
   }
}) //what if I only want two items