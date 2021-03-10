const testimonialsContainer = document.querySelector(".testimonial-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector(".user-image")
const username = document.querySelector(".username")
const role = document.querySelector(".role")


const testimonials = [
    {
        name: "Miyah Myles",
        position: "Marketing",
        photo:
        "https://randomuser.me/api/portraits/women/46.jpg",
        text: 
        "I'm so beutiful",
    },
    {
        name: "Lady Dee",
        position: "Video industry",
        photo:
        "https://randomuser.me/api/portraits/women/45.jpg",
        text: 
        "I'm amazing",
    },
    {
        name: "Big James",
        position: "Fisherman",
        photo:
        "https://randomuser.me/api/portraits/women/43.jpg",
        text: 
        "My fishes are beasties",
    },
    {
        name: "Twinki Tinky",
        position: "Tuletabies",
        photo:
        "https://randomuser.me/api/portraits/women/41.jpg",
        text: 
        "Hi I'm your favourite pokemon",
    }
]

let idx = 1


function updateTestimonal(){
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length -1)  {
       idx = 0
    }
}
setInterval(updateTestimonal, 10000)