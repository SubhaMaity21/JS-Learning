let a = 300

// var c= 65                 // this is global scope

// console.log([a,b,c]); // this time no prpblem

if(true){               //this is block scope
    let a= 15
    // var c= 98
    console.log("inner:",a);
}

/* we can bring global scope value to block scope but block scope value can not be 
transferred to global scope*/

console.log([a]);

/* as I defined c inside the scope it should not return the value if I log it outside the scope,
but it does for using "var" method, even if the variable is defined outside the scope ,
it will return the latter value */




function one(){
    const userName="subha"

    function two(){
        const website ="youtube"
        console.log(userName);
    }

    // console.log(website); //website can not be acssesed outside function two
    two()
}

one()

if (true){
    const username = "subha"
    if(username=="subha"){
        const website =" youtube"
        // console.log(username+ website);
    }

    // console.log(website); //error
}

// console.log(username); //error


// *********************************************

console.log(addone(5)) //here it throws no error

function addone (num){
    return num +1
}

// ********hoisting(a little bit)********

// console.log(addtwo); //it will throw error as it is hold in a variable

const addtwo = function(num){
    return num +2
}




