
// definiendo colores de manera hexadecimal
const colorsHex = [
    "#00aeda","#12da00","#da00c4","#b72020","#19b567","#1611a6","#a67c11","#fffb00","#0f6400","#640000","#ffa7cd","#d9d9d9","#747474","#000000"
]

// definiendo colores de manera simple
const colorSimple = ["red","green","blue","aqua","slateblue","goldenrod","greenyellow","paleturquoise","azure","darkcyan","burlywood","chartreuse","crimson","rebeccapurple"]


const colorCont = document.getElementById("color");
const container = document.getElementById("container");
const click = document.getElementById("click")
const simpleButton = document.getElementById("simple")
const hexButton = document.getElementById("hex")

var simple = false;
var hex = true
hexButton.style.textDecoration = "underline"

simpleButton.addEventListener("click", ()=>{
    simple = true
    hex = false
    simpleButton.style.textDecoration = "underline"
    hexButton.style.textDecoration = "none"
})

hexButton.addEventListener("click", ()=>{
    simple = false
    hex = true
    hexButton.style.textDecoration = "underline"
    simpleButton.style.textDecoration = "none"
})

click.addEventListener("click", (e)=>{
    e.preventDefault()
    var numRandom = Math.floor(Math.random() * 14)
    if (hex) {
        colorCont.textContent = colorsHex[numRandom]
        container.style.background = colorsHex[numRandom]
    } else {
        colorCont.textContent = colorSimple[numRandom]
        container.style.background = colorSimple[numRandom]
    }
})
