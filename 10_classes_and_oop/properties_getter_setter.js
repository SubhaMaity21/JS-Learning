function User(email,password){
    this._email = email,
    this._password = password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set:function(val){
            this._email = val
        }
    })

}
const Subha = new User("Subha@gmail.com","3454")
console.log(Subha.email);

