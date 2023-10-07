const menu = document.getElementById("menu");
const ulCategories = document.querySelectorAll(".category__ul");

var category = [];
let menuData = null

async function getAllMenu(categoryMarked) {
    try {
        if (!menuData) {
            const responseMenu = await axios("products.json");
            menuData = responseMenu.data
        }
        menuData.forEach(element => {
            if (!category.includes(element.category)) {
                category.push(element.category)
                console.log(element);
            }
            if (element.category == categoryMarked) {
                    menu.innerHTML += `
                    <div class="product">
                    <img class="product-image" src="${element.img}" alt="${element.name}">
                    <h4 class="product-name">${element.name}</h4>
                    <span class="product-price">${element.price}</span>
                    <hr>
                    <p class="product-description">${element.description}</p>
                    </div>
                    `   
                    console.log(element);
            }
            });
        } catch (error) {
            console.log(error); 
        }
    }
    
    for (let i = 0; i < ulCategories.length; i++) {
        ulCategories[i].addEventListener("click",(event)=>{
            ulCategories.forEach((element)=>{
                element.classList.remove("marked");
            });
            event.target.classList.add("marked");
            var markedElement = event.target.id
            menu.innerHTML = ""
            getAllMenu(markedElement)
        })
    }

getAllMenu("main-courses")

/* const loadImage = ()=>{
    console.log("ejecuted");
}

const observer = new IntersectionObserver(loadImage, {
    root: null,
    rootMargin: '0px',
    threshold: 0
})

ulCategories.forEach((element)=>{
    observer.observe(element)
}) */

