const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: '*'}})

app.use(express.static('static'))

server.listen(9000, () => {
    console.log('Server listens on port 9000')
})



io.on('connection', socket => {
    console.log(`User connected: ${socket.id}`)

    socket.on('message', data => socket.broadcast.emit('message', data))
    
})