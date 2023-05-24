import mongoose from 'mongoose';
import config from './config.js';


export default class MongoSingleton {
    static #instance;

    constructor() {
        this.#connectMongoDB();
    }

    static getInstance() {
        if (this.#instance) {
            console.log("Ya se ha generado una conexion con Mongo!!");
        } else {
            this.#instance = new MongoSingleton();
        }
        return this.#instance;
    }

    #connectMongoDB = async () => {
        try {
            await mongoose.connect(config.mongoUrl);
            console.log("Conectado con exito a la DB");
        } catch (error) {
            console.error("No se pudo conectar a la DB")
            process.exit();
        }
    }
}