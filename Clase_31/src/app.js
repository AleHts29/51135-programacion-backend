import express from 'express';
import config from './config/config.js';
//Clase de test:
import suma from './suma.js';
//import Routers
import usersRouter from './routers/users.router.js'

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Declare routers:
app.use("/api/users", usersRouter);

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    const executeTest = config.runTests;
    if (executeTest) {
        console.log("Ejecutando set de pruebas para suma:");
        //Escenarios:
        let testPasados = 0;
        const testTotales = 4;

        //Test 1: La función debe devolver null si algun parametro no es numérico.
        testPasados = escenario1(testPasados);

        //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
        // testPasados = escenario2(testPasados);

        //Test 3: La función debe poder realizar la suma correctamente.
        // testPasados = escenario3(testPasados);

        //Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros.
        // testPasados = escenario4(testPasados);

        console.log(`Test ejecutados: ${testTotales}, pasaron: ${testPasados}`);
    }
});

const escenario1 = (testPasados) => {
    console.log("Test 1: La función debe devolver null si algun parametro no es numérico.");
};

const escenario2 = (testPasados) => {
    console.log("Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:");
}

const escenario3 = (testPasados) => {
    console.log("Test 3: La función debe poder realizar la suma correctamente.");
}

const escenario4 = (testPasados) => {
    console.log("Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros");
}