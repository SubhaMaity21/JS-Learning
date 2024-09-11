const User = {
    _email:"sub@mail.com",
    _password:"sfvg",

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email = val
    }

}


const tea = Object.create(User)
console.log(tea.email);
console.log(tea._email);