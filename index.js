var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

io.on('connection', function(socket) {
    var con = 'user connected';
    console.log('a user connected');
    io.emit('broadcast', con);
    socket.on('disconnect', function() {
        var con = 'user disconnected';
        console.log(con);
        io.emit('broadcast', con);
    });
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});

http.listen(3000, function() {
    console.log('Listening on *:3000');
});
