const archiveVer = document.querySelector('.archiveVer')
const buttonsYesNo = document.querySelector('.buttonsYesNo')
const urlGetVer = 'https://hakatonkrasnodar.pythonanywhere.com/verificate_user'
const urlSendVer = ' https://hakatonkrasnodar.pythonanywhere.com/verificate_user?'

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


function templateVer(post) {
    cloneTemplate = postTemplate.cloneNode(true)
    cloneTemplate.dataset.id = post.id
    cloneTemplate.querySelector('.fioField').innerHTML = `${post.fio}`
    cloneTemplate.querySelector('.phoneField').innerHTML = `${post.phone}`
    cloneTemplate.querySelector('.kidsField').innerHTML = `${post.kids}`
    cloneTemplate.querySelector('.buttonsYesNo').classList.remove('hidYesNo')
    cloneTemplate.querySelector('.yes').addEventListener('click', ()=>{
        sendRequest('POST', urlSendVer+`id=${post.id}`+`&ver=1`).then(()=>{
            cloneTemplate.remove()
        })
    })
    cloneTemplate.querySelector('.no').addEventListener('click', ()=>{
        sendRequest('POST', urlSendVer+`id=${post.id}`+`&ver=2`).then(()=>{
            cloneTemplate.remove()
        })
    })
    cards.append(cloneTemplate)
    return cloneTemplate
}

archiveVer.addEventListener('click', ()=>{
    arrCards = cards.querySelectorAll('.template')
    flagMenu = 0
    infoMenu.classList.add('hidden')
    flagArchive = 0
    archiveButtons.classList.add('hiddenAdd')
    flagAdd = 0
    addUserButton.classList.add('hiddenAdd')
    arrCards.forEach(block => {
        block.remove()
    })
    sendRequest('GET', urlGetVer).then(data => {
        for (let i in data) {
            console.log(data[i])
            data[i].block = templateVer(data[i])
        }
    })
})