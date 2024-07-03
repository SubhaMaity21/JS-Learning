const temp = 54


if(temp<50){
    console.log( "temp is normal");
} else{
    console.log(`its abnormal`);
}

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`user power:${power}`);
// }

// console.log(`${power}`);




// const balance = 1000

// if(balance>500) console.log("test"),
// console.log("test2");

//without curlybraces in this method we can write but it should be in one line 
//but if I want to extend it to a second line have to give a coma(,) ,, but but this is very bad method


// if(balance<500){
//     console.log("less than");
// } else if(balance <750){
//     console.log("less than 700");
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail= true

if(userLoggedIn && debitCard){ //checks both, if one is false then it will be wrong 
    console.log("allow to buy");
}

if(loggedInfromEmail||loggedInfromGoogle){ //checks if one is true
    console.log("user loggedin");
    
}