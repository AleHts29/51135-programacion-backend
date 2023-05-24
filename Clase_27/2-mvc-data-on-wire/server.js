/*============================[Modulos]============================*/
import express from "express";
import path from 'path';
import { config } from "./src/config/config.js";
import routerProductos from "./src/router/productos.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static('public'))

/*============================[Rutas]============================*/

app.get('/healthcheck', (req, res)=>{
    res.send('Server ok!!!!')
});

app.use('/api/v1/productos', routerProductos)

/*============================[Servidor]============================*/
const PORT = config.server.PORT;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor [${config.server.NODE_ENV}] en puerto ${PORT}`);
})
server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});