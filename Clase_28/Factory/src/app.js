import express from 'express';
import __dirname from './util.js';
import handlebars from 'express-handlebars';

//Cookies si aplica:
import cookieParser from 'cookie-parser';
//Passport imports
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import config from './config/config.js';
import cors from 'cors';


//Routers a importar:
import studentRouter from './routes/students.router.js'
//import coursesRouter from './routes/courses.router.js'
//import viewsRouter from "./routes/views.router.js";
//import usersViewRouter from './routes/users.view.router.js'
//import jwtRouter from './routes/jwt.router.js'

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

/**
 * Template engine
 */
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'))

//(Solo si usar Cookies): inicializar el cookie parser.
app.use(cookieParser("CoderS3cr3tC0d3"));
//Inicializar passport:
initializePassport();
app.use(passport.initialize());

//Declaración de Routers:
//app.use('/',viewsRouter);
app.use("/api/students", studentRouter);
//app.use("/api/courses", coursesRouter);
//app.use("/users", usersViewRouter);
//app.use("/api/jwt", jwtRouter);

app.listen(config.port, () => {
    console.log("Servidor escuchando por el puerto: " + config.port);
});

/*const mongoInstance = async () => {
    try {
        await MongoSingleton.getInstance();
    } catch (error) {
        console.error(error);
    }
};
mongoInstance();*/