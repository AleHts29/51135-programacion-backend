//Usemos un arreglo de prueba:
let valoresOriginales = [1, 2, 3, 4, 5];
// console.log("Valores Originales:");
// console.log(valoresOriginales);


let nuevosValores = valoresOriginales.map(x => x + 1);
// console.log(nuevosValores);

//Otras operaciones
let otrosValores = valoresOriginales.map(x => x * 2); //[2, 4, 6, 8, 10]
let masValores = valoresOriginales.map(x => "a");
// console.log(masValores);

//Que pasa si declaramos el callback fuera?
const mapCallBack = (valor) => {
    if (valor % 2 === 0) {
        return valor;
    } else {
        return "No es par!"
    }
};

const evaluarParesMap = valoresOriginales.map(mapCallBack)
// console.log(evaluarParesMap);



//Recrear un callback de funcion map:
//Usemos un arreglo de prueba:
let arregloDePrueba = [1, 2, 3, 4, 5];

const miFuncionMap = (arreglo, callback) => {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        let nuevoValor = callback(arreglo[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
};

//Ejecutemos las dos versiones:
let nuevoArregloPropio = miFuncionMap(arregloDePrueba, x => x * 2);
let nuevoArregloConMap = arregloDePrueba.map(x => x * 2);
// console.log(nuevoArregloPropio);
// console.log(nuevoArregloConMap);


//Extra: Podemos agregar nuestra funcion al arreglo como tal, usando el prototype del objeto Array:
Array.prototype.miFuncionMap = function (callback) {
    let nuevoArreglo = []
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}
// console.log(arregloDePrueba.miFuncionMap(x => x * 2));
// console.log(nuevoArregloConMap);




/**
 * Callbacks usando distintas operaciones
 */
const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;


const realizarOperacion = (num1, num2, callback) => {
    console.log(`Voy a realizar una operacion, puede ser: ${callback}`);
    let res = callback(num1, num2);
    console.log(`El resultado de la operacion realizada es: ${res}`);
}

realizarOperacion(2, 5, sumar);
realizarOperacion(2, 5, restar);
realizarOperacion(2, 5, multiplicar);
realizarOperacion(2, 5, dividir);