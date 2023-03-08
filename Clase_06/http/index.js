const http = require('http');
const PORT = 8080


const server = http.createServer((request, response) => {
    response.end('Mi primer hola mundo desde el server con NODEJS!! - UPDATE 5!!')
})


server.listen(PORT, () => {
    console.log(`Server escuchando por el puerto: ${PORT}`);
})