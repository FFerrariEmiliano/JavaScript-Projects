const number = document.getElementById("number");
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")

function updateNumberColor() {
    if (timer.count < 0) {
        number.style.color = "red"
    }
    if (timer.count > 0){
        number.style.color = "green"
    }
    if (timer.count === 0) {
        number.style.color = "#000038"
    }
}

class Timer{
    constructor(){
        this.count = 0
    }

    decrease(){
        this.count--
        number.textContent = this.count
        updateNumberColor()
    }

    reset(){
        this.count = 0
        number.textContent = this.count
        updateNumberColor()
    }

    increase(){
        this.count++
        number.textContent = this.count
        updateNumberColor()
    }

}

const timer = new Timer()

document.addEventListener("click", (e)=>{

    if (e.target.className == "decrease") {
        timer.decrease()
    } else if (e.target.className == "reset") {
        timer.reset()
    } else {
        timer.increase()
    }
})



/* decrease.addEventListener("click", ()=>{
    
})
reset.addEventListener("click", ()=>{
    
})
increase.addEventListener("click", ()=>{
    
}) */