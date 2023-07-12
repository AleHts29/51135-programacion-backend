import { Router } from 'express';

const router = Router();

const users = [];

router.post('/register', (req, res) => {
    const user = req.body; //no se hace un control del lo que viene del body
    console.log(user); // se hace un .log del usuario, no hay sifrado de contrasenia
    if (users.length === 0) user.id = 1; // la asignacion del id es muy pobre
    else user.id = users[users.length - 1].id + 1;
    users.push(user);
    res.send({ status: "success", payload: user }) //devuelve el user completo, expone pass
})

export default router;