Object.getOwnPropertyDescriptor(Math)


// console.log(Math.PI);

const Chai = {
    name:'milk',
    price:230,
    isAvailable : true,
    logOn: function(){
        console.log("Hello");
    }
}

console.log(Object.getOwnPropertyDescriptor(Chai,"name"));

Object.defineProperty(Chai,'name',{
    writable:   false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(Chai,'name'))

for (let [key,value] of Object.entries(Chai)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
    
}

Object.defineProperty(Math,'PI',{
    writable:true,
    enumerable:true,
    configurable:true
})

  Math.PI = 5;
console.log(Math.PI);

