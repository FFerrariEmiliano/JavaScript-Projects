const closeCont = document.getElementById("close-cont");
const openNav = document.getElementById("open-nav")
const nav = document.getElementById("nav")

closeCont.addEventListener("click",()=>{
    nav.classList.add("close")
})

openNav.addEventListener("click", (e)=>{
console.log(e.target);
    nav.classList.toggle("close")
})