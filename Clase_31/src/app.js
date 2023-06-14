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
        testPasados = escenario2(testPasados);

        //Test 3: La función debe poder realizar la suma correctamente.
        testPasados = escenario3(testPasados);

        //Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros.
        testPasados = escenario4(testPasados);

        console.log(`Test ejecutados: ${testTotales}, pasaron: ${testPasados}`);
    }
});

const escenario1 = (testPasados) => {
    console.log("Test 1: La función debe devolver null si algun parametro no es numérico.");
    // Given --> lo que le doy a la funcion para ejecutar la prueba
    const numero1 = "2";
    const numero2 = 2;

    // Then o ejecucion 
    let result = suma(numero1, numero2)

    // Assert o validacion 
    if (result == null) {
        console.log("Test 1: pasa! \n");
        testPasados++
    } else console.error(`Test 1: No pasado, se recibió ${typeof result}, pero se esperaba null.`);

    return testPasados;
};


const escenario2 = (testPasados) => {
    console.log("Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:");

    // Then
    let result = suma();

    // Assert 
    if (result === 0) {
        console.log("Test 2: pasa!! \n");
        testPasados++;
    } else {
        console.error(`Test 2: No pasado, se recibió ${result}, pero se esperaba 0.`);
    }
    return testPasados;
}

const escenario3 = (testPasados) => {
    console.log("Test 3: La función debe poder realizar la suma correctamente.");

    // Given
    const numero1 = 3;
    const numero2 = 2;

    // Then o ejecucion 
    let result = suma(numero1, numero2)

    // Assert
    const expected = 5;
    if (result === expected) {
        console.log("Test 3: Pasado!\n");
        testPasados++;
    }
    else {
        console.error(`Test 3: No pasado, se recibió ${result}, pero se esperaba ${expected}.`);
    }
    return testPasados;

}

const escenario4 = (testPasados) => {
    console.log("Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros");

    // Give
    const numerosEntrada = [1, 2, 3, 4, 5]

    // Then
    let result = suma(...numerosEntrada);

    // Assert
    const expected = 15;
    if (result === expected) {
        console.log("Test 4: Pasado!\n");
        testPasados++;
    } else {
        console.error(`Test 4: No pasado, se recibió ${result}, pero se esperaba ${expected}.`);
    }
    return testPasados;
}