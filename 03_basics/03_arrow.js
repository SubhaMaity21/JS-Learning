const user ={
    userName:"Subha",
    price:999,


    welcomeMessage : function(){
        console.log(`${this.userName},welcome`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName ="Joy"
// user.welcomeMessage()

console.log(this);
/*as this this running in node environment so global object is empty,but if I run this 
in browser it will return window */


function chai(){        //type-1
    let username = "Subha"
    console.log(this.username);
}

// chai() 

// const chai = function(){       //  type-2
//     let username ="Subha"
//     console.log(this.username);
// }
// chai()

/*When chai is called as a standalone function,
this refers to the global object (or undefined in strict mode).
Since username is not a property of the global object, this.username is undefined */

//************  Arrow Function */
// const chai = ()=>{
//     let username ="Subha"
//     console.log(this);
// }
// chai()

const addtwo =(num1,num2) =>{
    return num1 + num2
}

//if curly brases is used then return keyword has to use..

console.log(addtwo(4,5));

//or

const addone = (num1,num2)=> (num1 + num2)
console.log(addone(6,8));

const adding = (num1,num2)=>({username:"SUbha"})
console.log(adding());



let val1;
val1 =  5 ?? 6;
console.log(val1);

