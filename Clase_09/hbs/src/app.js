import express from 'express';
import handlebars from 'express-handlebars'
import __dirname from './util.js';
import viewRouter from './routes/views.router.js'


// Delcaramos exp
const app = express()
const PORT = 9090
//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configuracion de HBS
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + "/views/");
app.set('view engine', 'handlebars');

// app.get('/hello', (req, res)=>{
//     // usuario de prueba
//     let testUser = {
//         name: 'Santiago',
//         last_name: 'Kosacoff',
//         edad: 26
//     }
//     res.render('index', testUser);
// })

// usando router y hbs
app.use('/', viewRouter);




app.listen(PORT, ()=>{
    console.log(`Server run on port: ${PORT}`);
})
