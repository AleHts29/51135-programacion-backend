import express from 'express';
import usersRoutes from './src/routes/users.routes.js'
import petsRoutes from './src/routes/pets.routes.js'

import __dirname from './utils.js';

const app = express()

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/src/public'))

const PORT = 9090



app.use('/api/user', usersRoutes)
app.use('/api/pet', petsRoutes)


app.listen(PORT, () => {
    console.log(`server run on port: ${PORT}`);
    console.log(__dirname);
})