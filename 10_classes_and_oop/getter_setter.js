class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    get email(){
      return  this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const Subha = new User("sub@mail.com","aerr33")
console.log(Subha.password);
console.log(Subha.email);
console.log(Subha._email); //by this orginal email can be accessed.
 // there is another method

 class teacher{
    #name;
    #subject;

    constructor(name,subject){
        this.#name = name
        this.#subject = subject
    }

    get name(){
        return `${this.#name.toUpperCase()}KAli`
    }
    set name(val){
        this.#name = val.toLowerCase()
    }
 }

 const Master = new teacher("Setu","English")

 console.log(Master.name);
 