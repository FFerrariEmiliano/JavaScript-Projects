// local reviews
const reviews = [
    {
        "id": 1,
        "name": "John Smith",
        "job": "lawyer",
        "img": "images/OIG (1).jpg",
        "text": "I recently dined at Rico, and it was an incredible experience. The ambiance, food, and service were top-notch. I highly recommend it!"
    },
    {
        "id": 2,
        "name": "Michelle Johnson",
        "job": "doctor",
        "img": "images/OIG.jpg",
        "text": "Rico is my go-to spot for a delicious meal. The healthy options on the menu are a hit, and the staff is always friendly and accommodating."
    },
    {
        "id": 3,
        "name": "David Williams",
        "job": "engineer",
        "img": "images/OIG (2).jpg",
        "text": "I had the pleasure of visiting Rico for a business dinner, and it exceeded all expectations. The innovative menu and attention to detail make it a must-visit."
    },
    {
        "id": 4,
        "name": "Jennifer Davis",
        "job": "teacher",
        "img": "images/OIG (3).jpg",
        "text": "Rico is perfect for a family night out. The kid-friendly menu and warm atmosphere make it a favorite among my students and their parents."
    },
    {
        "id": 5,
        "name": "Emily Wilson",
        "job": "Architect",
        "img": "images/OIG (4).jpg",
        "text": "As an architect, I appreciate the design and aesthetics of places. Rico not only serves delicious food but also boasts a stylish and inviting interior."
    },
    {
        "id": 6,
        "name": "Sarah Anderson",
        "job": "Journalist",
        "img": "images/OIG (5).jpg",
        "text": "I had the pleasure of covering Rico for a feature article. The culinary experience is nothing short of exceptional, making it a hidden gem in the city."
    }    
]


const image = document.getElementById("image");
const author = document.getElementById("name");
const job = document.getElementById("profession");
const text = document.getElementById("p-review");
const surprise = document.getElementById("surprise")

const left = document.querySelector(".fa-angle-left")
const right = document.querySelector(".fa-angle-right")

let id = 3

function assign(id) {
    if (id >= 0 && id < reviews.length) {
        image.src = reviews[id].img;
        author.textContent = reviews[id].name;
        job.textContent = reviews[id].job;
        text.textContent = reviews[id].text;
    }
}

assign(id)

left.addEventListener("click", ()=>{
    id--
    if (id < 0) {
        id = reviews.length - 1
    }
    assign(id)
})

right.addEventListener("click", ()=>{
    id++
    if (id > reviews.length - 1) {
        id = 0
    }
    assign(id)
})


function Random() {
    const randomIndex = Math.floor(Math.random() * reviews.length)
    image.src = reviews[randomIndex].img
    author.textContent = reviews[randomIndex].name
    job.textContent = reviews[randomIndex].job
    text.textContent = reviews[randomIndex].text
}

surprise.addEventListener("click", ()=>{
    Random()
})