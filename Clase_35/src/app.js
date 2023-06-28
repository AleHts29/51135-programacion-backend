import express from 'express';
import config from './config/config.js';

import cluster from 'cluster';
import { cpus } from 'os';

//import Routers
//Performance test:
import performanceRouter from './routers/performance-test.router.js';
import { addLogger } from './config/logger.js';

// 1er
// console.log("Preguntar si el cluster es primario");
// console.log(cluster.isPrimary);
// if (cluster.isPrimary) {
//     const numeroProcesadores = cpus().length // 10
//     console.log("Soy proceso primario y voy delegar el trabajo a un fork.");
//     console.log("Numero de CPUs en mi maquina: ");
//     // console.log(cpus().length);

//     for (let i = 0; i < numeroProcesadores - 1; i++) {
//         cluster.fork();
//     }
// } else {
//     console.log("Soy un worker!!");
// }




// 2do - ejemplo
//Testing Clusters:
console.log(`Es cluster primario? : ${cluster.isPrimary}`);
if (cluster.isPrimary) {
    const numeroProcesadores = cpus().length;
    console.log(`NumeroProcesadores en esta maquina: ${numeroProcesadores}`);
    console.log("Proceso primario, generando Fork para un trabajador.");
    for (let i = 0; i < numeroProcesadores - 1; i++) {
        cluster.fork();
    }
} else {
    console.log("Este es un proceso Fork! Soy un worker!!");
    console.log(`Soy un proceso worker con el id: ${process.pid}`);

    const app = express();

    //JSON settings:
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(addLogger);

    app.get("/", (req, res) => {
        res.send({ status: "success", message: `Peticion atendida por el worker: ${process.pid}` });
    });
    app.get("/docker", (req, res) => {
        res.send("Hola Docker!");
    });

    //Declare routers:
    app.use("/api/performance", performanceRouter);

    const SERVER_PORT = config.port;
    app.listen(SERVER_PORT, () => {
        console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    });
}
