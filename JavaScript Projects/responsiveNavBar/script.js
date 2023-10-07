const bars = document.getElementById("bars")
const nav = document.getElementById("nav")

bars.addEventListener("click", (e)=>{
    if(nav.style.height == "182px"){
        nav.style.height = "64px"
    } else{
        nav.style.height = "182px"
    }
    e.stopPropagation()
})
document.addEventListener("click", (e)=>{
    if (e.target != nav && !nav.contains(e.target) || e.target == bars) {
        nav.style.height = "64px"
    }
})

