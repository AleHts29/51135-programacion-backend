import { Schema, model } from "mongoose";

const ProductoSchema = Schema({
    nombre: {type:String, required: true},
    precio: {type:String, required: true, default: 0.00},
    descripcion: {type:String, required: true},
    imagen: {type:String, required: false}
});

const ProductoModel = model('productos', ProductoSchema);

export default ProductoModel;