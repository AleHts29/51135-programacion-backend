import ProductoDAOMongoDB from "../models/daos/Productos.dao.js";

const DAO = new ProductoDAOMongoDB();

export async function obtenerProductos(req, res) {
    try {
        const listaProductos = await DAO.listarAll();
        console.log('get',listaProductos)

        return res.status(200).json({
            status: 200,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            data: listaProductos 
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            error: error
        }); 
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
        const itemSaved = await DAO.guardar(item);

        return res.status(201).json({
            status: 201,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            data: itemSaved 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            error: error
        }); 
    }
}