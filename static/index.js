const message = document.querySelector('.message')
const sendBtn = document.querySelector('.send-btn')
const postMessage = document.querySelector('.post-message')

const socket = io('http://10.60.5.5:9000')
socket.on('connection')

socket.on('message', data => {
    postMessage.insertAdjacentHTML('beforeend', `<li>${data}</li>`)
})

sendBtn.addEventListener('click', () => {
    socket.emit('message', message.value)
})