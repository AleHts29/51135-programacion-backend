import mongoose from "mongoose";

const RegistroSchema = mongoose.Schema({
    nombre: {type:String, required: true},
    password: {type:String, required: true},
    direccion: {type:String, required: true}
});

const RegistroModel = mongoose.model('registro', RegistroSchema);

export default RegistroModel;