// revisar bien la importación automática ahí tenías cosas raras
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express ();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(__dirname +  '/public'));

io.on('connection', (socket) => { // debe ser minúscula
    console.log('un cliente se ha conectado');
    socket.on('enviar-elemento', (elemento) => {

        io.emit('elemento-recibido', elemento);
     });

     socket.on('enviar-cursor' , (elemento) => {
        io.emit('cursor-recibido', elemento);
     });

     socket.on('disconnected' , () => {
        console.log('un cliente se ha desconectado');

    });

});

server.listen(5500,() => {
    console.log ('escuchandingg');
});