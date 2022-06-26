
// const archiveKids = document.querySelector('.archiveKids')
const postTemplate = document.querySelector('.template')
// const cards = document.querySelector('.cards')
let cloneTemplate = null
const requestURL = 'https://hakatonkrasnodar.pythonanywhere.com/get_users?'
function template(post) {
    cloneTemplate = postTemplate.cloneNode(true)
    cloneTemplate.dataset.id = post.id
    cloneTemplate.querySelector('img').src=`data:image/png;base64,${post.photo}`
    cloneTemplate.querySelector('.phoneField').innerHTML = `${post.pic}`
    cloneTemplate.querySelector('.fioField').innerHTML = `${post.fio}`
    cloneTemplate.querySelector('.phoneField').innerHTML = `${post.phone}`
    cloneTemplate.querySelector('.kidsField').innerHTML = `${post.kids}`
    cards.append(cloneTemplate)
    return cloneTemplate
}

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
archiveParents.addEventListener('click', () => {
    arrCards = cards.querySelectorAll('.template')
    arrCards.forEach(block => {
        block.remove()
    })
    sendRequest('GET', requestURL + `type=2`).then(
        data => {
            for (let i in data) {
                console.log(data[i])
                data[i].block = template(data[i])
            }
        })
})
archiveKids.addEventListener('click', () => {
    arrCards = cards.querySelectorAll('.template')
    arrCards.forEach(block => {
        block.remove()
    })
    sendRequest('GET', requestURL + `type=3`).then(
        data => {
            for (let i in data) {
                console.log(data[i])
                data[i].block = template(data[i])
            }
        })
})
archiveWorker.addEventListener('click', () => {
    arrCards = cards.querySelectorAll('.template')
    arrCards.forEach(block => {
        block.remove()
    })
    sendRequest('GET', requestURL + `type=0`).then(
        data => {
            for (let i in data) {
                console.log(data[i])
                data[i].block = template(data[i])
            }
        })
})

