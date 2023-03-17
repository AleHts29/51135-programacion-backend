import express from 'express';

// declaramos express
const app = express();
const PORT = 8080

app.get('/saludo', (req, res) => {
    res.send({ nombre: 'Juan' })
})

//  req.query
app.use(express.urlencoded({ extended: true }));


/*
http://localhost/ ---> 127.0.0.1
*/


/**
 * Actividad en clase: Otras respuestas de Express
 */

app.get('/bienvenida', (req, res) => {
    res.send('<p style="color:blue"> Bienvenido a Express, estoy usando HTML como respuesta. </p>')
})

app.get('/usuario', (req, res) => {
    res.send(
        {
            nombre: 'Juan',
            apellido: "Torres",
            edad: 23,
            correo: 'juan@gmail.com'
        }
    )
})

//Usando request params:
app.get('/usuario2/:nombre/:apellido', (request, response) => {
    console.log(request.params);
    response.send(`Hola, tu nombre completo es: ${request.params.nombre} ${request.params.apellido}`);
});


/**
 * Ejemplo en vivo: Usando arreglos y request params
 */

const usuarios = [
    { id: 1, nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M" },
    { id: 2, nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M" },
    { id: 3, nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F" },
    { id: 4, nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "F" }
];

app.get('/', (req, res) => {
    res.send(usuarios)
})

app.get('/:userId', (req, res) => {
    let {userId} = req.params
    console.log(typeof(req.params.userId))

    // hacemos una busqueda
    const usuario = usuarios.find(u => u.id === parseInt(userId));
    if (usuario) {
        res.json({usuario})
    }
    res.send({ messasge: "Usuario no encontrado!!" })
})



const consultas = []
app.get('/ejemploQueries/query', (request, response) => {
    let { nombre, apellido, edad } = request.query;
    consultas.push(request.query)
    response.send(consultas);
});




app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})