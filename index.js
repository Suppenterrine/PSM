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

io.on('connection', function(socket){

    socket.on('request_hello', function(usr, id) {

        console.log(usr + ' with id: ' + id + ' send a request');
        
        io.sockets.connected[id].emit("greetings", "Howdy, " + usr + "!");
    });
});