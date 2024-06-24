//Immediately invoked Function Expression (IIFE)




//for IIFE function
(function chai(){
    //named IIFE
    console.log("DB Connnected");
}
)();
// for iife to end the function we have to give a semi-colon(;)
//(the defination of function)(function exicution)

( ()=>{
    console.log(`This is `);
})();

( (name)=>{
    console.log(`this is ${name}`);
} )("Subha")
