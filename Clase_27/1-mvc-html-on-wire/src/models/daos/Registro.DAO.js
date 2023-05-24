import ContenedorMongoDB from "../containers/ContenedorMongoDB.js";
import RegistroModel from "../registro.model.js";

class RegistroDAOMongoDB extends ContenedorMongoDB {
    constructor(){
        super(RegistroModel);
    }
}

export default RegistroDAOMongoDB;