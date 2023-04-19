import express from 'express';
import __dirname from './util.js';
import mongoose from 'mongoose';

import ordersModel from './models/orders.model.js';



const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));



const connectMongoDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/pizzeria?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");

        // let response = await ordersModel.insertMany(
        //     [
        //         {
        //             name: "Pepperoni", size: "small", price: 19, quantity: 10, date: "2021-03-13T08:14:30Z"
        //         }, 
        //         {
        //             name: "Pepperoni", size: "medium", price: 20, quantity: 20, date: "2021-03-13T09:13:24Z"
        //         }, 
        //         {
        //             name: "Pepperoni", size: "large", price: 21, quantity: 30, date: "2021-03-17T09:22:12Z"
        //         }, 
        //         {
        //             name: "Cheese", size: "small", price: 12, quantity: 15, date: "2021-03-13T11:21:39.736Z"
        //         }, 
        //         {
        //             name: "Cheese", size: "medium", price: 13, quantity: 50, date: "2022-01-12T21:23:13.331Z"
        //         }, 
        //         {
        //             name: "Cheese", size: "large", price: 14, quantity: 10, date: "2022-01-12T21:05:08.13Z"
        //         }, 
        //         {
        //             name: "Vegan", size: "small", price: 17, quantity: 10, date: "2021-01-13T05:08:13Z"
        //         }, 
        //         {
        //             name: "Vegan", size: "medium", price: 18, quantity: 10, date: "2021-01-13T05:10:13Z"
        //         }
        //     ]
        // );
        // console.log(response);

        let orders = await ordersModel.find();
        console.log(orders);


// 2da parte

        let size = "small"
        orders = await ordersModel.aggregate([
            //Stage 1: Filtrar las ordenes por tamaño, en este caso solo pizzas medianas:
            {
                $match: {size: size}
            },

            //Stage 2: Agrupar por sabores y acumular el número de ejemplares de cada sabor:
            {
                $group: {_id: "$name", totalQuantity: {$sum: "$quantity"}}
            },

             //Stage 3: Ordenar los documentos ya agrupados de mayor a menor.
             {
                $sort: {totalQuantity: -1}
             },


            //Stage 4: Guardar todos los documentos generados de la agregacion en un nuevo documento 
            //         dentro de un arreglo. Para no dejarlos sueltos en la colección.
            //         $push indica que se guarda en un array, y $$ROOT inserta todo el documento.
            {
                $group: {_id: 1, orders: {$push: "$$ROOT"}}
            },
            //Stage 5: Creamos nuestro pryecto a partir del array de datos.
            {
                $project: {
                    "_id": 0,
                    orders: "$orders"
                }
            },
            //Stage FINAL
            {
                $merge: {into: "reports"}
            }
        ]
        )

        console.log(orders);



    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
}


connectMongoDB();





const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

