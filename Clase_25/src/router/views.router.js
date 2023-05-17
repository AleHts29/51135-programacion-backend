import { Router } from 'express';
import { fork } from 'child_process';

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {});
});


// router.get("/suma", (req, res) => {
//     res.send(`El resultado de la operacion es: ${operacionCompleja()}`)
// });

router.get("/suma", (req, res) => {
    const child = fork('./src/forks/operations.js');
    child.send("Iniciando Calculo")
    child.on('message', result => {
        res.send(`El resultado de la operacion es: ${result}`)
    })
});

// funcion bloqueante
// const operacionCompleja = () => {
//     let result = 0;
//     for (let i = 0; i < 5e9; i++) {
//         result += i;
//     }
//     return result;
// };


export default router;