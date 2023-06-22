/**
*
* Clase 00
*
*/
let nombre = 'Ana'
let numero = 12;
nombre = 'Camila'

console.log(typeof (nombre));

const objeto = {
    nombre: 'Ale',
    apellido: 'Huertas'
}


let array = []
array = [true]

console.log(typeof (objeto));
console.log(objeto);


/**
*
* Clase 01
*
*/

// Copia por Referencia
let obj1 = {
    name: "Nico",
    edad: 25
}
console.log(obj1);


const obj2 = { ...obj1 }
console.log(obj2);

obj2.name = "Lucas"
obj2.pais = "Arg"

console.log(obj2);

console.log('Objeto 1');
console.log(obj1);


const array2 = [1, 2, 3, 4, "perro"]

// array2 = [4, 5]
array2.push(34)
