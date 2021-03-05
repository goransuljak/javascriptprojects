const buttons = document.querySelectorAll("button")



buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.parentNode.classList.toggle("active")
    })
})