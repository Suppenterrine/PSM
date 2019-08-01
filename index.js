const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const moment = require('moment');

const start = moment().format('DD.MM.YYYY, HH:mm');
moment.locale('de');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function () {
    console.log('socket.io server listening on port 3000');
    console.log('//================================\\\\');
    console.log('|| Serverstart: ' + start + ' ||');
    console.log('\\\\================================//');
});

var clients = [];
var nameObj = {};

io.on('connection', function(socket){

    socket.on('request_hello', function(msg) {

        console.log(msg + ' send a request');
        
        nameObj.name = msg;
        nameObj.id = socket.id;
        clients.push(nameObj);
        
        console.log(clients);
        console.log(clients[0].id);
        
        io.sockets.connected[clients[0].id].emit("greetings", "0 greets you.");
        io.sockets.connected[clients[1].id].emit("greetings", "1 greets you.");
    });


});