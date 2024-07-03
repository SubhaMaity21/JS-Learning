function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    // console.log("A");
}

sayMyName()

// function addtwoNumber(number1,number2){  //these are parameters
//         console.log(number1+number2)
// }


function addtwoNumber(number1,number2){  //these are parameters

//    let result = number1 +number2
    
    return number1 + number2
    console.log("SUbha"); //anything will not print after return
}

const result = addtwoNumber(3,4)//these are arguments

// console.log("result:",result)


function loginUserMessage(userName="Sam"){
    if(!userName){
    return   'please enter a username';
        
    }
    return `${userName.trim()} just logged in`
}

console.log(loginUserMessage('  Subha    '))

/* here userName is defined so if statement will not be checked,and if we pass a value then it will 
 override the given value */


function calculateCartPrice(val1,val2,...num1){ //this is rest operator
    return num1
}

console.log(calculateCartPrice(200,400,600,1000,80));

const user={
    username:"Subha",
    price:"499"
}

function userprice(getUser){
    return `hey the user is ${getUser.username},and the course price is ${getUser.price}`
}

// console.log(userprice(user)); // for redirecting a existing object
console.log(userprice({
    username:"Subha",
    price:"388"
})); //we can directly pass a complete object

const myArr =[100,60,566]

function getArr(arr){
        return `this is ${arr}`
}

console.log(myArr[1]);
