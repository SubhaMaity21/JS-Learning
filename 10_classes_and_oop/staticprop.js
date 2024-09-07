class User{
    constructor(username){
        this.username=  username
    }

    logMe(){
        console.log(this.username);
    }

    static createID(){
        return `123`
    }
}

const subha = new User("subha")
// console.log(subha.createID());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const GPixel = new Teacher("Pixel 9","@google.com")
console.log(GPixel.createID());
GPixel.logMe()