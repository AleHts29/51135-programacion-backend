import express from 'express';
//Declrando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const SERVER_PORT = 9090;

let frase = "Frase inicial";

/**
 * Metodo GET por default:
 */
app.get('/api/frase', (request, response) => {
    console.log("Consumiendo api GET /api/frase..");
    console.log(frase);
    response.send({ frase });
});

/**
 * GET por palabras
 */
app.get('/api/palabras/:pos', (request, response) => {
    console.log("Consumiendo api GET /api/palabras..");
    console.log(request.params.pos);
    if (isNaN(pos)) return res.status(400).send({ status: "error", error: "Pos debe ser un número" });
    const parsedPos = parseInt(pos);
    const palabras = frase.split(' ');
    if (parsedPos <= 0 || parsedPos > palabras.length) return res.status(400).send({ status: "error", error: "Posición fuera del rango de la frase" })
    response.send({ palabra: palabras[parsedPos - 1] });
});

app.post('/api/palabras', (request, response) => {
    const palabra = request.body.palabra;
    frase = frase + ` ${palabra}`;
    response.send({ palabra, pos: frase.split(' ').length });
})

app.put('/api/palabras/:pos', (request, response) => {
    const pos = request.params.pos;
    const palabra = request.body.palabra;
    if (isNaN(pos)) return response.status(400).send({ status: "error", error: "Pos debe ser un número" });
    const parsedPos = parseInt(pos);
    const palabras = frase.split(' ');
    if (parsedPos <= 0 || parsedPos > palabras.length) return response.status(400).send({ status: "error", error: "Posición fuera del rango de la frase" })
    const anterior = palabras[parsedPos - 1];
    palabras[parsedPos - 1] = palabra;
    frase = palabras.join(' ');
    response.send({ actualizada: palabra, anterior })
})

app.delete('/api/palabras/:pos', (request, response) => {
    const pos = request.params.pos;
    if (isNaN(pos)) return response.status(400).send({ status: "error", error: "Pos debe ser un número" });
    const parsedPos = parseInt(pos);
    const palabras = frase.split(' ');
    if (parsedPos <= 0 || parsedPos > palabras.length) return response.status(400).send({ status: "error", error: "Posición fuera del rango de la frase" })
    const palabraEliminada = palabras[parsedPos - 1];
    palabras.splice(parsedPos - 1, 1);
    frase = palabras.join(' ');
    response.send({ status: "success", eliminada: palabraEliminada })
})



//Arrancando el servidor:
app.listen(SERVER_PORT, () => {
    console.log(`Servidor listo escuchando en el puerto: ${SERVER_PORT}`);
});