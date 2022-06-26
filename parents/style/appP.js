const addParents = document.querySelector('.addUser')
const getQr = document.querySelector('.addQr')
const cards = document.querySelector('.ebaQr')
const mainQrIMG = cards.getElementsByTagName('img')[0]
const forQr = document.querySelector('.forQr')
const requestURL = 'https://hakatonkrasnodar.pythonanywhere.com/gen_qr'
let flagQr = 0
const body = document.getElementsByTagName('body')[0]
const buttonExitQr = document.querySelector('.txtQr')
function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)//как получить
        xhr.responseType = 'json'//иначе стсрока
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => { //обращение до отправки 
            if (xhr.status >= 400) {//ошибка
                reject(xhr.status)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {//в случае ошибки 

        }
        if (body != null)
            xhr.send(JSON.stringify(body))//здесь отправляем строчку
        else xhr.send()
    })
}

addParents.addEventListener('click', () => {
    window.open('./registrParent/registrP.html')
})
function templ(post) {
    console.log(post.qr)
    mainQrIMG.src = `data:image/png;base64,${post.qr}`
}
getQr.addEventListener('click', () => {
    // arrCards = cards.querySelectorAll('.template')
    // arrCards.forEach(block => {
    //     block.remove()
    // })
    sendRequest('GET', requestURL).then(
        data => {
            templ(data)
        })
        .then(() => {
            if (flagQr === 0) {
                flagQr = 1
                cards.classList.remove('sibQr')
            }
        })
})

buttonExitQr.addEventListener('click', () => {
    if (flagQr === 1){
        flagQr=0
        cards.classList.add('sibQr')
    }
})