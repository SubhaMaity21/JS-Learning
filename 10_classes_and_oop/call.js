function SetUserName(username){
    this.username = username
    console.log("called");
}

function createUser(username,email,pasword){
    SetUserName.call(this,username)
    this.email =email
    this.pasword = pasword
}

const oneUser = new createUser("Subha","sub@google","1234")
console.log(oneUser);