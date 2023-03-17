import { fileURLToPath } from 'url';
import { dirname } from 'path';

import multer from 'multer';

// confi Ruta absoluta
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuracion MULTER
const storage = multer.diskStorage(
    {
        // ubicaion del directorio donde voy a guardar los archivos
        destination: function (req, file, cb) {
            cb(null, `${__dirname}/src/public/img`)
        },
        filename: function (req, file, cb) {
            // console.log(file);
            cb(null, `${Date.now()}-${file.originalname}`)
        }
    }
)

export const uploader = multer({
    storage, onError: function (err, next) {
        console.log(err);
        next();
    }
});

export default __dirname;

