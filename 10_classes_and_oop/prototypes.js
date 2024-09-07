let user = "Subha      "
String.prototype.trueLength = function(){  // creating a method 
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}
user.trueLength()


const heros =["Spider","Dora"]

const obj = {
    spider:"Fly",
    dora:"travel"
}

Object.prototype.Log = function(){      // creating a method for Objects as arrays are under Objects so it will also apply to arrays
    console.log("This is Subha");
}

obj.Log()
heros.Log()


// But if any method is transferred to Arrays It can not be assigned to Objects

Array.prototype.anLog = function(){
    console.log("try this one");
}

heros.anLog()
// obj.anLog()    // this one will give error