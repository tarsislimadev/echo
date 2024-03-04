const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const { PORT } = require('./config.js')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log(`connected ${socket.id}`)

  socket.on('message', (message) => io.emit('message', message))
})

server.listen(PORT, () => console.log(`listenning on ${PORT}`))
