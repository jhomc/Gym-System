const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('card')

for (let card of cards) {
    card.addEventListener("click", function(){
        let recipeIndex = card.getAttribute("id")
        window.location.href = `/inforeceita/${recipeIndex}`
    })
}


const ingredients = document.querySelector('.ingredients')
const showA = document.querySelector('.showA')
const hideA = document.querySelector('.hideA')

document.querySelector(".hideA").addEventListener("click", function(){
    ingredients.classList.add("hidden")
    hideA.classList.add('hidden')
    showA.classList.remove("hidden")
})
document.querySelector(".showA").addEventListener("click", function(){
    ingredients.classList.remove("hidden")
    hideA.classList.remove('hidden')
    showA.classList.add("hidden")
})


const showB = document.querySelector('.showB')
const hideB = document.querySelector('.hideB')
const preparation = document.querySelector('.preparation')

document.querySelector(".hideB").addEventListener("click", function(){
    preparation.classList.add("hidden")
    hideB.classList.add('hidden')
    showB.classList.remove("hidden")
})
document.querySelector(".showB").addEventListener("click", function(){
    preparation.classList.remove("hidden")
    hideB.classList.remove('hidden')
    showB.classList.add("hidden")
})

const information = document.querySelector('.information')
const showC = document.querySelector('.showC')
const hideC = document.querySelector('.hideC')

document.querySelector(".hideC").addEventListener("click", function(){
    information.classList.add("hidden")
    hideC.classList.add('hidden')
    showC.classList.remove("hidden")
})
document.querySelector(".showC").addEventListener("click", function(){
    information.classList.remove("hidden")
    hideC.classList.remove('hidden')
    showC.classList.add("hidden")
})

