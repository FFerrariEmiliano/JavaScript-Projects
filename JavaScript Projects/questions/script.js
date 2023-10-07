const cross = document.querySelectorAll(".open-close")

cross.forEach((crossElement)=>{
    crossElement.addEventListener("click", (e)=>{
        parentCross = crossElement.parentNode;
        parentCross.classList.add("close")
    })
    console.log("click");
})