$(function() {
    var socket = io();
    $('#form').submit(function() {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('broadcast', function(con) {
        $('#messages').append($('<li>').text(con));
    });
    socket.on('chat message', function(msg) {
        $('#messages').append($('<li>').text(msg));
    });
});
