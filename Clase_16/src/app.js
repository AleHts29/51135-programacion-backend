import express from 'express';
import __dirname from './util.js';
import { userModel } from './models/user.model.js';

import studentsModel from './models/students.js';
import { coursesModel } from './models/courses.js';

import mongoose from 'mongoose';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Declaración de Routers:


const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async ()=>{
    try {
    //     await mongoose.connect('mongodb://localhost:27017/clase16_indexes_populate?retryWrites=true&w=majority'); 
    //     //miPrimeraBaseDeDatos
    //     console.log("Conectado con exito a MongoDB usando Moongose.");
    //     //let response = await userModel.find().explain('executionStats');
    //     //console.log(response);

    // // explain
    //     console.log("Busqueda por usuario...\n");
    //     let response = await userModel.find({first_name: "Celia"}).explain('executionStats');
    //     console.log(response);



/*=============================================
=                   Populate                   =
=============================================*/
await mongoose.connect('mongodb://localhost:27017/colegio?retryWrites=true&w=majority');
    console.log("Conectado con exito a MongoDB usando Moongose.");

    // let nuevoEstudiante = await studentsModel.create({
    //     name: "Ignacio",
    //     lastName: "Vigo",
    //     age: '27'
    // })

    // let student = await studentsModel.findOne({_id: nuevoEstudiante._id }).populate('courses')
    // console.log(student)

    // creamos la el curso (el documento)
    // let nuevoCurso = await coursesModel.create({
    //     title: "Curso de Ingles",
    //     description:"Open Inglish",
    //     teacherName:"Gaston"
    // })

    // let cusrNuevo = await coursesModel.findOne({_id: nuevoCurso._id});
    // console.log(cusrNuevo);


    // Creamos la conxion/referencia 
    let student = await studentsModel.findOne({_id:"643884083f2017a505238f61"})
    console.log(JSON.stringify(student, null, '\t'))

    // student.courses.push({course:"64389541fb7fc42701a8f20b"})
    // console.log(JSON.stringify(student, null, '\t'));

    // let result = await studentsModel.updateOne({_id:"6438938546c8206ec6c62fe4"}, student )
    // console.log(result);




    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();