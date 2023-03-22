// Configuracion del socket del lado del cliente
const socket = io();

socket.emit('mensaje', 'Hola soy el cliente!!')

socket.on('msg_02', data=>{
    console.log(data);
})



socket.on('evento_para_todos_excepto_socket_actual', data => {
    console.log(data);
});

socket.on('evento_para_todos', data => {
    console.log(data);
});