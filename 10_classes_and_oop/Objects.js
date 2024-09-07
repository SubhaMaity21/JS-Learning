function setThis(number){
    return number*5
}
setThis.power = 2
console.log(setThis);
console.log(setThis(6));
console.log(setThis.power);
console.log(setThis.prototype);

function createUser(name,price){
    this.name = name
    this.price = price
}

createUser.prototype.incriment = function(){
    this.price++
}

createUser.prototype.PrintMe = function(){
    console.log(`The price is ${this.price}`);
}

const chai = new createUser("subha",25)
const tea = new createUser("JS",250)
chai.incriment()
chai.PrintMe()