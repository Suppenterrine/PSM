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

io.sockets.on('connection', function(socket){
    
    clients.push(socket.id);

    socket.on('request_hello', function(msg) {

        console.log(clients);
        

        // io.sockets.connected[clients[0]].emit("greeting", "Howdy, User 1!");
        // io.sockets.connected[clients[1]].emit("greeting", "Hey there, User 2");
        /*

        console.log(msg + ' send a request');

        // user[0] = msg;
        // user[1] = socket.id;

//         let stringMsg = '';
//         stringMsg = socket.id;
// console.log(stringMsg);

        nameObj.name = msg;
        nameObj.id = socket.id;
        console.log(io.sockets.connected.id);


        // user.push(nameObj);
        
        if (nameObj.id) {
            // console.log('back in loop');
            // console.log(nameObj.id);
            
            io.sockets.connected.id.emit("greetigns", nameObj.id + " greets you.");
        }
        */
    });
});