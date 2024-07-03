const userEmail =""             //empty string means false

if(userEmail){
    console.log("user has email");
} else {
    console.log("does not have the email");
}



/* 
falsy values -

false,0,-0, BigInt 0n, null, "", undefined,NaN

*/

//exept those all are truthy values


/*
"0","false"," ",[],{},function(){}
*/


const myEmail=[]

if(myEmail.length===0){
    console.log("it's empty");
}


// yrEmail ={}

// if(Object.keys(yrEmail).length===0){
//     console.log("It's empty");
// }


// Nullish Coalescing Operator (??): null defined

let dj ;
// dj = 10??5;

// console.log(dj);

// dj = undefined ?? 16
// console.log(dj);



//Terniary Operator

//condition ? true : false


const teaPrice = 20

teaPrice >= 80 ? console.log("greter than 80"):console.log("less than 80");