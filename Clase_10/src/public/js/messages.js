const socket = io();
socket.emit("message", "Hola, me estoy comunicando con un websocket!");

const input = document.getElementById('textoEntrada');
const log = document.getElementById('log');

//Primera parte: enviar caracter por caracter.
// input.addEventListener('keyup',evt=>{ //Descomenta si quieres usar la primera parte del ejecicio.
//     let {key} = evt;
//     evt.target.value='';
//     socket.emit('message1',key);
// });

// socket.on('log',data=>{
//     log.innerHTML+=data;
// });



//Parte dos: Guardar mensajes por socketid.
input.addEventListener('keyup',evt=>{
    if(evt.key==="Enter"){
        socket.emit('message2',input.value);
        input.value=""
    }
});
socket.on('log',data=>{
    let logs='';
    data.logs.forEach(log=>{
        logs += `${log.socketid} dice: ${log.message}<br/>`
    })
    log.innerHTML=logs;
});

