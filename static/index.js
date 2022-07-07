const msgInput = document.querySelector('.msger-input')
const msgBtn = document.querySelector('.msger-send-btn')
const postMessage = document.querySelector('.msger-chat')


const socket = io('http://192.168.245.100:9000/')
socket.on('connection')

socket.on('message', data => {
    postMessage.insertAdjacentHTML('beforeend', `<div class="msg left-msg">
                                                    <div class="msg-bubble">
                                                        <div class="msg-text">
                                                            ${data}
                                                        </div>
                                                    </div>
                                                </div>`)
})

msgBtn.addEventListener('click', (e) => {
    e.preventDefault()
    socket.emit('message', msgInput.value)
    postMessage.insertAdjacentHTML('beforeend', `<div class="msg right-msg">
                                                    <div class="msg-bubble">
                                                        <div class="msg-text">
                                                            ${msgInput.value}
                                                        </div>
                                                    </div>
                                                </div>`)
})