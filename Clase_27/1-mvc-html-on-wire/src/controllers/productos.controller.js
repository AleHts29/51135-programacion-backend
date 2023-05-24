import ProductoDAOMongoDB from "../models/daos/Productos.dao.js";

const DAO = new ProductoDAOMongoDB();

export async function obtenerProductos(req, res) {
    try {
        const listaProductos = await DAO.listarAll();
        console.log('get',listaProductos)
        return res.render('vista', {listaProductos});
    } catch (error) {
        throw new Error(`Error al obtener Operaciones`);
    }
}

export async function guardarProducto(req, res) {
    try {
        const item = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.body.imagen
        }
        console.log('guarda:', item)
        await DAO.guardar(item);

        const listaProductos = await DAO.listarAll();
        
        return res.render('vista', {listaProductos});
    } catch (error) {
        console.log(error);
        throw new Error(`Error al guardar Producto`);
    }
}