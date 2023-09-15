const exp = require('constants');
const { Socket } = require('dgram');
const express = require ('express');
const http =require ('http');
const { disconnect } = require('process');
const socketIO= require('socket.io') 



const app = express ();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(__dirname +  '/public'));

io.on('connection', (Socket) => {
    console.log('un cliente se ha conectado');
    socket.on('enviar-elemento', (elemento) => {

        io.emit('elemento-recibido', elemento);
     });

    Socket.on('enviar-cursor' , (elemento) => {
        io.emit('cursor-recibido', elemento);
     });

    Socket.on('disconnected' , () => {
        console.log('un cliente se ha desconectado');

    });

});

server.listen(5500,() => {
    console.log ('escuchandingg');
});