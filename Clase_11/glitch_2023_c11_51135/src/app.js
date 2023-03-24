import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewRouter from './routes/views.router.js'

import {Server} from 'socket.io'

const app = express()
const PORT = process.env.PORT || 8080;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Uso de vista de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + "/views");
app.set('view engine', 'handlebars');


//Carpeta public
app.use(express.static(__dirname+'/public'));



const httpServer = app.listen(PORT, () => {
    console.log("Servidor escuchando por el puerto: " + PORT);
});


// Declaramos el router
app.use('/', viewRouter)


// const socketServer = new Server
const socketServer = new Server(httpServer);
let messages = []
// Abrimos el canal de comunicacion
socketServer.on('connection', socket=>{



    // aqui vamos a recibir el nombre del usuario 
    socket.on('message', data =>{
        messages.push(data);
        socketServer.emit('messageLogs', messages )
    })

    // hacemos un broadcast del nuevo usuario que se conecta al chat
    socket.on('userConnected', data =>{
        socket.broadcast.emit('userConnected', data.user)
    })

})

