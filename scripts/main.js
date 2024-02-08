const random = (min,max) => Math.floor(min + Math.random() * (max + 1 - min))
const aiImg = document.querySelector('.ai-choice-main img')
const userImg = document.querySelector('.user-choice-main img')
const userChoiceItem = document.querySelectorAll('.choice-item')
let interval = null
const opt = {
    turnAi: [0],
    turnUser: [0],
    interval: 20,
    userScore: 0,
    aiScore: 0,
}

const generateAi = () => {
    let rand = random(1,3)
    aiImg.setAttribute('src', `./images/${rand}.png`)
}

interval = setInterval(generateAi, opt.interval)

userChoiceItem.forEach(elem => {
    elem.addEventListener('click', () => {
        clearInterval(interval)
        let userChoice = elem.firstElementChild.getAttribute('src')
        userImg.setAttribute('src', userChoice)
    })
})