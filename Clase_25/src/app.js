import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import config from './config/config.js';


import viewsRouter from './router/views.router.js';

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


//Declare routers:
app.use('/', viewsRouter)


const SERVER_PORT = config.port;
console.log(config.mongoUrl);

app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);

    console.log(process.argv.slice(2));



    // process.exit(5);

    // Esta exception no fue capturada, o controlada.
    // Exception no capturada: TypeError: console is not a function
    // console();

    console.log("Llamando lista de numeros:");
    listNumbers(1, 2, 3, "aaa", true);

})


// Ejemplo slide_35
const listNumbers = (...numbers) => {
    let invalidData = false;
    let dataTypes = new Array();
    console.log("Datos recibidos");
    numbers.forEach(element => {
        console.log(element);
        if (typeof (element) !== 'number') {
            invalidData = true;
            dataTypes.push(typeof element);
        }

    });
    if (invalidData) {
        console.error("Invalid parameters.");
        console.log(dataTypes);
        process.exit(-4);
    }
};


