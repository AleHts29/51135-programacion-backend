/**
 * FS con Promesas: fs.promise
 *
- fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- fs.promises.readFile  = Para obtener el contenido de un archivo.
- fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
 */

const fs = require("fs");
const dirNamePromesa = "./files4";
const fileNamePromesa = dirNamePromesa + "/ejemploFSPromesa.txt";

const fsConPromesas = async (data) => {
    // creamos el DIR
    await fs.promises.mkdir(dirNamePromesa, { recursive: true })


    // Escribimos en el archivo
    await fs.promises.writeFile(fileNamePromesa, data)

    // Lectura del archivo
    let resultado = await fs.promises.readFile(fileNamePromesa, "utf-8");
    console.log("Leyendo archivo");
    console.log(resultado);
}

fsConPromesas("Hola desde promesas!!")



/**
 * FS con Promesas: Escribiendo objetos completos
 */

//Lectura y escritura de archivos JSON
//Generado package.json desde npm init -y

const info = {
    contenidoStr: "",
    contenidoObj: "",
    size: 0
}

const fs = require("fs");
const fileNameJSON = "./package.json";
const fileInfoJSON = "./info.json";

const fsConPromesasJSON = async () => {

    // lectura
    if (!fs.existsSync(fileNameJSON)) {
        console.error("Archivo no existe favor ejecutar comando: npm init -y ");
        throw Error("El archivo no se puede leer porque no existe: " + fileNameJSON);
    }

    // obtenemos el JSON Sting
    let jsonString = await fs.promises.readFile(fileNameJSON, "utf-8");
    console.info("Archivo JSON obtenido desde archivo: ");
    console.log(jsonString);

    info.contenidoStr = jsonString;
    info.contenidoObj = JSON.parse(jsonString);
    console.log("Objeto info transformado desde arhivo:" + fileNameJSON);
    // console.log(info.contenidoObj.name);
    console.log(info);


    // guardamos en formato .json
    await fs.promises.writeFile(fileInfoJSON, JSON.stringify(info, '\t'));


    // Lectura de resuldos
    let resultado = await fs.promises.readFile(fileInfoJSON, "utf-8");
    console.log("Archivo leido resultado:");
    console.log(resultado);

}

fsConPromesasJSON()