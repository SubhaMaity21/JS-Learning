const tinderUser = new Object()  //singleton
const redditUser ={}//non-singleton

redditUser.id ="123abc"
redditUser.name ="Sammy"
redditUser.isLoggedIn = true

console.log(redditUser);

console.log(Object.keys(redditUser)); //important 
console.log(Object.values(redditUser));//important
console.log(Object.entries(redditUser));//important

const newUser = {
    email: "subha@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Subha",
            lastName:"Maity"
        }
    }
}

console.log(newUser.fullName.userFullName.firstName);

const obj1 ={
    1:"a",
    2:"b"
}

const obj2={
    2:"c",
    4:"d"
}
// const obj3 = Object.assign({},obj1,obj2) // {} this is target ,and obj1 and 2 are sources

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email:'abc@mail.com',
    },
    {
        id:2,
        email:'mnp@gamil.com'
    }
]

console.log(users[1].email);

