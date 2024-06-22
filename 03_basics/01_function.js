function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    // console.log("A");
}

// sayMyName()

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
     return   console.log('please enter a username');
        
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage('Subha'))

/* here userName is defined so if statement will not be checked,and if we pass a value then it will 
 override the given value */
