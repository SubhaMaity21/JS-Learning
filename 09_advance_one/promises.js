const promiseOne = new Promise(function(resolve,rject){
    // Do an async task
    //Db calls
    //Cryptography
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(()=>{
    console.log("task 2 resolved");
})


const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName:"Subha",email:"subha@mail.com"})
    },1000)
})


PromiseThree.then((user)=>{
    console.log(user);
})


const Promisefour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName:"Subha",password:"123"})
        }else{
            reject('Error:Something is wrong')
        }
    },1500)
})


Promisefour
.then((user)=>{
    console.log(user);
    return user.userName
})
.then((userName)=>{
    console.log(userName);
})
.catch((err)=>{console.log(err);})
.finally(()=>{
    console.log('The promise is either resolved or rejected');
})




const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName:"JS",password:"123"})
        }else{
            reject('Error:JS is wrong')
        }
    },2000)
});


async function consumePromiseFive(){
   try{
    const response = await PromiseFive
    console.log(response);
   }catch(err){
    console.log(err);
   }
}

consumePromiseFive()


async function getUser(){
    try {
        const response = await fetch('https://api.github.com/users/SubhaMaity21')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getUser()

fetch('https://api.github.com/users/SubhaMaity21')
.then((response)=>{
    return response.json()
}).then((user)=>{
    console.log(user.id);
})
.catch((err)=>{
    console.log(err);
})
