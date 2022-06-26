const buttonMenu = document.querySelector('.buttonMenu')
const infoMenu = document.querySelector('.infoMenu')
const addUserButton = document.querySelector('.addUserButtons')
const addUser = document.querySelector('.addUser')
const archiveButtons = document.querySelector('.archiveButtons')
const archiveUsers = document.querySelector('.archiveUsers')
const cards = document.querySelector('.cards')
const url = 'example: http://hakatonkrasnodar.pythonanywhere.com/get_users?type=1'
const epmptyUrl = ' http://hakatonkrasnodar.pythonanywhere.com/add_user'
const addParents = document.querySelector('.parents')
const addWorker = document.querySelector('.worker')
const addKid = document.querySelector('.kids')
const archiveParents = document.querySelector('.archiveParents')
const archiveWorker = document.querySelector('.archiveWorker')
const archiveKids = document.querySelector('.archiveKids')
// /get_users?type= 1-админ 2 - родитель 3-ребенок 0 - сотрудник

let flagMenu = 1
let flagAdd = 0
let flagArchive = 0
buttonMenu.addEventListener('click', () => {
    if (flagMenu === 0) {
        flagMenu = 1
        infoMenu.classList.remove('hidden')
    } else {
        flagMenu = 0
        infoMenu.classList.add('hidden')
        flagArchive = 0
        archiveButtons.classList.add('hiddenAdd')
        flagAdd = 0
        addUserButton.classList.add('hiddenAdd')
    }
})

addUser.addEventListener('click', () => {
    if (flagAdd === 0) {
        flagAdd = 1
        addUserButton.classList.remove('hiddenAdd')
        flagArchive = 0
        archiveButtons.classList.add('hiddenAdd')
    } else {
        flagAdd = 0
        addUserButton.classList.add('hiddenAdd')
    }
})

archiveUsers.addEventListener('click', () => {
    if (flagArchive === 0) {
        flagArchive = 1
        flagAdd = 0
        archiveButtons.classList.remove('hiddenAdd')
        addUserButton.classList.add('hiddenAdd')
    } else {
        flagArchive = 0
        archiveButtons.classList.add('hiddenAdd')
    }
})
cards.addEventListener('click', () => {
    flagMenu = 0
    infoMenu.classList.add('hidden')
    flagArchive = 0
    archiveButtons.classList.add('hiddenAdd')
    flagAdd = 0
    addUserButton.classList.add('hiddenAdd')
})
addParents.addEventListener('click', () => {
    window.open('./registrParent/registrP.html')
})
addWorker.addEventListener('click', () => {
    window.open('./registrWorker/registrW.html')
})
addKid.addEventListener('click', () => {
    window.open('./registrKids/registrK.html')
})
archiveParents.addEventListener('click', () => {
    flagMenu = 0
    infoMenu.classList.add('hidden')
    flagArchive = 0
    archiveButtons.classList.add('hiddenAdd')
    flagAdd = 0
    addUserButton.classList.add('hiddenAdd')
})
archiveWorker.addEventListener('click', () => {
    flagMenu = 0
    infoMenu.classList.add('hidden')
    flagArchive = 0
    archiveButtons.classList.add('hiddenAdd')
    flagAdd = 0
    addUserButton.classList.add('hiddenAdd')
})
archiveKids.addEventListener('click', () => {
    flagMenu = 0
    infoMenu.classList.add('hidden')
    flagArchive = 0
    archiveButtons.classList.add('hiddenAdd')
    flagAdd = 0
    addUserButton.classList.add('hiddenAdd')
})