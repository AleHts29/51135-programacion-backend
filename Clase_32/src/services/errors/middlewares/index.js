import EErrors from '../errors-enum.js';

export default (error, req, res, next) => {
    //Logica
    console.error("Error detectado entrando al Error Handler");
    console.error(error.cause)
    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            res.status(400).send({ status: "Error", error: error.message });
            // next();
            break;

        default:
            res.status(500).send({ status: "Error", error: "Unhandeld error!" })
            break;
    }
};