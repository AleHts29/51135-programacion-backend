const { obtenerDatos, crearDato, deleteServices } = require("../services/product.Services.js")


const getDatosControllers = async (req, res) => {
    let datos = await obtenerDatos();
    res.json(datos)
}


const postDatosControllers = async (req, res) => {
    let dato = req.body;
    await crearDato(dato);
    res.json({ dato })
}


const deleteDatosControllers = async (req, res) => {
    let { id } = req.params;
    await deleteServices(id);
    res.json({ msj: "delete product" })
}

module.exports = {
    getDatosControllers,
    postDatosControllers,
    deleteDatosControllers
}