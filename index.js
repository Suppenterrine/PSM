const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const moment = require('moment')

const start = moment().format('DD.MM.YYYY, HH:mm')
moment.locale('de')

app.use(express.static(__dirname + '/public'))
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public')
})

http.listen(3000, function () {
  console.log('socket.io server listening on port 3000')
  console.log('//================================\\\\')
  console.log('|| Serverstart: ' + start + ' ||')
  console.log('\\\\================================//')
})

let clients = [
  {
    user: '',
    client: ''
  }
]

io.on('connection', function (socket) {
  socket.on('request_hello', function (usr, id) {
		// console.log(usr + ' with id: ' + id + ' send a request')

    clients.push({user: usr, client: id})
    io.sockets.connected[id].emit('greetings', 'Howdy, ' + usr + '!')
  })

  socket.on('request_clients', function (id) {
    io.sockets.connected[id].emit('deliver_clients', clients)
  })
})
