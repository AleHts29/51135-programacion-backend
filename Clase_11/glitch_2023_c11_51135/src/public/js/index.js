// Configuracion del socket del lado del cliente
const socket = io();

socket.emit('mensaje', 'Hola soy el cliente!!')

Swal.fire({
    icon: 'success',
    title: 'Hola Coders!!',
    text: 'Alerta basica de SweetAlert2!',
    footer: '<a href="">Por qu eveo esta alerta?</a>'
  })


