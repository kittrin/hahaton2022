const search = document.getElementsByName('search')[0]
const buttonSearch = document.querySelector('.buttonSearch')
const reqUrl = 'https://hakatonkrasnodar.pythonanywhere.com/search_user?'
const postTemplate = document.querySelector('.template')
const cards = document.querySelector('.cards')

function template(post) {
    cloneTemplate = postTemplate.cloneNode(true)
    cloneTemplate.dataset.id = post.id
    cloneTemplate.querySelector('img').src = `data:image/png;base64,${post.photo}`
    // console.log('data:image/png;base64+'+`${post.photo}`)
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

buttonSearch.addEventListener('click', () => {
    arrCards = cards.querySelectorAll('.template')
    arrCards.forEach(block => {
        block.remove()
    })
    if (search.value != '') {
        sendRequest('GET', reqUrl + `part=${search.value}`).then(data => {
            for (let i in data) {
                console.log(data[i])
                data[i].block = template(data[i])
            }
        })
    }
})