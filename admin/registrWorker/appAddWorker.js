const requestURL = 'https://hakatonkrasnodar.pythonanywhere.com/add_user?'
const button = document.querySelector('.sendInfo')
const fio = document.getElementsByName('fioText')[0]
const phone = document.getElementsByName('phoneText')[0]
const number = document.getElementsByName('numberSchool')[0]
const photo = document.querySelector('.photo')
const photo1 = document.querySelector('.photo1')
// const imgF = document.querySelector('.imgF')
let fileInput = document.getElementById('fileInput')
let img = null

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

fileInput.addEventListener('change', (e) => {
    let file = fileInput.files[0]
    let reader = new FileReader();
    reader.onload = ((e) => {
        img = new Image()
        img.src = reader.result;
        console.log('luck')
        photo.style.backgroundColor = '#b6ffc6'
        photo.style.backgroundImage = `url('${img.src}')`
        photo1.style.opacity = 0
        console.log(img.src)
    })
    reader.readAsDataURL(file);
})

button.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click')
    if ((fio.value != '') && (phone.value != '') && (number.value != '')) {
        console.log('after if')
        sendRequest('POST', requestURL + 'type=0' + `&fio=${fio.value}` + `&group=${number.value}` + `&pic=${img.src}` + '&inst=0' + `&phone=${phone.value}`).then(() => {
            console.log('goooooooooooooooooood')
            fio.value=''
            phone.value=''
            number.value=''
            photo.style.backgroundColor = '#D9D9D9'
        })
    }
})