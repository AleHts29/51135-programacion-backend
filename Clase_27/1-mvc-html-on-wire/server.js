/*============================[Modulos]============================*/
import express from "express";
import exphbs from 'express-handlebars';
import path from 'path';
import { config } from "./src/config/config.js";
import routerProductos from "./src/router/productos.routes.js";

const app = express();
/*----------- Motor de plantillas -----------*/
app.set('views', path.join(path.dirname(''), './src/views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

/*============================[Rutas]============================*/
app.get('/', (req, res)=>{
    res.redirect('/productos');
});

app.get('/healthcheck', (req, res)=>{
    res.send('Server ok!!!!')
});

app.use('/productos', routerProductos)

/*============================[Servidor]============================*/
const PORT = config.server.PORT;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor [${config.server.NODE_ENV}] en puerto ${PORT}`);
})
server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});