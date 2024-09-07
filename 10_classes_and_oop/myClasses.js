//ES6 

class User{
    constructor(username,email,pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    encryptPassword(){
        return `${this.pass}abc`
    }

    changetoUppercase(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Subha","ffh",123)
console.log(chai.encryptPassword());
console.log(chai.changetoUppercase());

// BTS

function user(username,email,pass){
    this.username = username
    this.email = email
    this.pass = pass
}

user.prototype.encryptPassword = function(){
    return `${this.pass}abc`
}

user.prototype.toUpperCase = function(){
     return `${this.username.toUpperCase()}`
}

const me = new user("SUbha","dfdgsvdvfyudsg","8765")
console.log(me.encryptPassword());