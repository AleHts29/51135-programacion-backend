import ContenedorMongoDB from "../containers/ContenedorMongoDB.js";
import ProductoModel from "../productos.model.js";

class ProductoDAOMongoDB extends ContenedorMongoDB {
    constructor(){
        super(ProductoModel);
    }
}

export default ProductoDAOMongoDB;