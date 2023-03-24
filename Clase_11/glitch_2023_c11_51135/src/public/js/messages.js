const socket = io();
let user; 
const catBox = document.getElementById('chatBox')


/*=============================================
=              Aplicando SweetAlert           =
=============================================*/
Swal.fire({
    icon: "info",
    title:'Identicate, por favor',
    input: 'text',
    text: 'Ingrese el username para identificarse en el chat.',
    color: "#716add",
    inputValidator: (value)=>{
        if(!value){
            return "Necesitas escribir tu nombre de usuario para continuar!"
        }else{
            // aqui usamos socket
            socket.emit("userConnected", {user: value})
        }
    },
    allowOutsideClick: false // esto es para no dejar pasar al usuario si no completa el input, dando cli-ck afuera.
}).then( result =>{
    user = result.value
}
)




//Guardar mensajes por usuario y mostrarlo en nuesto log de mensajes.
//  ale : "Hola como estas?"
catBox.addEventListener('keyup', evt=>{
    if(evt.key === 'Enter'){
        if(catBox.value.trim().length > 0){
            socket.emit('message', {user: user, message: catBox.value})
            catBox.value = "";
        }
        else{
            alert("Por favor escribir una palabra/mensaje, los espacios no son validos")
        }
    }
})


// Escuchamos etodfos los usuarios que estan conectados
socket.on('messageLogs', data=>{
    const messageLogs = document.getElementById('messageLogs');
    let logs='';
    data.forEach(log=>{
        logs += `${log.user} dice: ${log.message}<br/>`
    })
    messageLogs.innerHTML=logs;
})


// Aqui escuchamos los nuevos usuarios que se conectan al chat
socket.on('userConnected', data =>{
    let message = `Nuevo usuario conectado: ${data}`
    Swal.fire({
        icon:  'info', 
        title: 'Nuevo usuario entra al chat!!',
        text: message,
        toast: true,
        color: '#716add'
    })
})



