//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element ==5){
        // console.log("it's best");
    }
    // console.log(element);
}




for (let i = 1; i <= 10; i++) {
//  console.log(`outer value${i}`);
    for (let j = 1; j <= 10; j++) {
        
    //    console.log(`inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*'+ j + '=' + i*j);
    }
}



let myArr =["flash","batman","Superman","Shaktiman"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}



// break and continue


// for (let index = 1; index < 20; index++) {

//     if(index==5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of i is  ${index}`);
    
// }



for (let index = 1; index < 20; index++) {

    if(index==5){
        console.log(`detected 5`);
        continue;
        
    }
    console.log(`value of i is  ${index}`);
    
}