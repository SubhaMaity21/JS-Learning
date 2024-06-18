//singleton
//Object.create


//object literals

const mySym = Symbol("key1")

const jsUser ={
    name:"Subha",
    "fullName":"Subha Maity",
    [mySym]:"myKey1",
    age:18,
    location:"Kolkata",
    email:"subha@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

// console.log(jsUser.age)

// console.log(jsUser["age"])
// console.log(jsUser["fullName"]); //this is the right way

// console.log(  jsUser[mySym]);


jsUser.email = "subha@chatgpt.com" //this is the way to overwrite
// console.log(jsUser["email"]);

Object.freeze(jsUser) //way to freeze
jsUser.email =  "subha@ms.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello World");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

const anotherUser = {
    name: "Ram",
    email: "ram@mail.com"
};

Object.defineProperty(anotherUser,"email",{
    writable:false,
    configurable:false
})

anotherUser.email = "sam@google.com"; 

console.log(anotherUser); 

const prp = Object.getOwnPropertyDescriptor(anotherUser, "email");
console.log(prp); 



