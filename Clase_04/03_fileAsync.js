
/**
 * Fs Asincrono:
 * 
- writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
- appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/


const fs = require("fs");
const dirNameASync = "./files2";
const fileNameASync = dirNameASync + "/ejemploCallback.txt";

let data = "Hola Coders, estoy en un archivo! - utilizando callbacks"

fs.mkdir(dirNameASync, { recursive: true }, (error) => {
    if (error) throw Error('No se pudo crear el directorio base!')

    // Escritura
    fs.writeFile(fileNameASync, data, (error) => {
        if (error) throw Error('No se pudo escribir el archivo!')
    })

    // lectura del archivo
    fs.readFile(fileNameASync, 'utf-8', (error, contenido) => {
        if (error) throw Error("No se pudo leer el archivo!");
        console.log("Contenido del archivo:");
        console.log(contenido);

        // Agregamos mas contenido
        fs.appendFile(fileNameASync, " otro ejemplo ", (error) => {
            if (error) throw Error("No se pudo actualizar el archivo!");

            fs.readFile(fileNameASync, "utf-8", (error, contenido) => {
                if (error) throw Error("No se pudo leer el archivo!");
                console.log("Contenido del archivo como resultado:");
                console.log(contenido);

                // Eliminamos el file
                fs.unlink(fileNameSync, (error) => {
                    if (error) throw Error("No se pudo borrar archivo.");
                });
            });
        });
    })
})