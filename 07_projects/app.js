const input = document.querySelector('#in')
const submit = document.querySelector('#submit')
const remaining = document.querySelector('.re-value')
const start = document.querySelector('.start')
const randomNumber = parseInt(Math.random()*100) + 1

function startGame(){

}

 let remainingChances = 10


submit.addEventListener("click",function(){
    remainingChances = remainingChances - 1
   
})