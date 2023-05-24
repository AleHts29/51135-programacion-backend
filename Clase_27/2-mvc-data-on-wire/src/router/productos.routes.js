import { Router } from "express";
import { obtenerProductos, guardarProducto } from "../controllers/productos.controller.js";

const routerProductos = Router();

routerProductos.get('/', obtenerProductos);
routerProductos.post('/', guardarProducto);

export default routerProductos;