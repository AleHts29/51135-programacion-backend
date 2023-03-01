/**
 * Hands on Lab:
 * Manager de Usuarios
 * FS con Promises
 */

const UserManager = require("./UserManager.js");
let userManager = new UserManager();
console.log(userManager);
let persistirUsuario = async () => {
    await userManager.crearUsuario("Usuario1", "Apellido1", 20, "React JS");
    let usuarios = await userManager.consultarUsuarios();
    console.log(`Usuarios encontrados en User Manager: ${usuarios.length}`);
    console.log(usuarios);
};
persistirUsuario();