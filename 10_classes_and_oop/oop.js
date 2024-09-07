const user ={
    username: "Subha",
    loginCount: 10,
    isSignedIn: true,
    getUserDetails: function(){
        console.log(`got the details of ${this.username}`);
    }
    
}

console.log(user.getUserDetails());

function User(userName,loginCount,isSignedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isSignedIn = isSignedIn

    this.greetings = function(){
        console.log(this.userName);
    }
    


    return this
}

// const userOne = User("Subha",12,true)
// const UserTwo = User("JS",30,false)
// console.log(userOne); //it is over ride-ed by UserTwo

// So as a Solution use 'new'const userOne = User("Subha",12,true)

const userOne = new User("Subha",12,true)
const UserTwo = new  User("JS",30,false)
// console.log(userOne);
console.log(userOne.greetings()); 
// console.log(UserTwo); 



