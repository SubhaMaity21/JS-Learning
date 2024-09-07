class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(this.username);
    }
}

class teacher extends User {
    constructor(username,password){
        super(username)
        this.password = password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chai = new teacher("Subha","123")
console.log(chai);

const tea = new User("Subha")
// tea.addCourse()
tea.logMe()
chai.addCourse()