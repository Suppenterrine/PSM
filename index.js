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
    var user = [];
    var sprUsr = [];

    var nameObj = {};
    let con = 0;
    socket.on('request_hello', function(msg) {

        console.log(msg + ' send a request');

        user[0] = msg;
        user[1] = socket.id;

        sprUsr.push(user);

        // HIER DIE VERSUCHE MIT DEN OBJEKTEN
        // Die mag ich eigentlich lieber weil man die schöner ansprechen kann

        // nameObj.name = msg;
        // nameObj.id = socket.id;

        // user.push(nameObj);
        
        console.log(sprUsr);
        con++;
    });
});