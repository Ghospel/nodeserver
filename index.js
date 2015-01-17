var server = require('http').createServer();
var io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
        console.log('socket connected');


        socket.on('disconnect', function () {
            console.log('socket disconnected');
        });

        socket.emit('text', 'connected to the server!');

        socket.on('message', function (data) {
                console.log("Message received: " + data);
                socket.broadcast.emit('location', data);
                console.log("Location data was send to all connected devices!");
                socket.emit('send', "Data was send!");
            });
        });





    server.listen(3000); console.log("listening");