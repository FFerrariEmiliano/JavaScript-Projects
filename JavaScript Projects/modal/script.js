const contModal = document.querySelector(".cont-modal");
const openModal = document.getElementById("open-modal");
const acceptCookies = document.getElementById("accept-cookies");
const denyCookies = document.getElementById("deny-cookies")

var cookies = false

openModal.addEventListener("click", ()=>{
    if (!cookies) {
        contModal.style.display = "flex"
    }
})

function hideModal() {
    contModal.classList.add("cont-modal-deny")
    contModal.classList.remove("cont-modal")
    setTimeout(() => {
        contModal.classList.remove("cont-modal-deny")
        contModal.classList.add("cont-modal")
        contModal.style.display = "none"
    }, 100);
}

denyCookies.addEventListener("click", ()=>{
    hideModal()
})

function cookiesAccepted() {
    cookies = true
    contModal.classList.remove("cont-modal-deny")
    contModal.classList.add("cont-modal")
    contModal.style.display = "none"
}

acceptCookies.addEventListener("click", ()=>{
    cookiesAccepted()
})
