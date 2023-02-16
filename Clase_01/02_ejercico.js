let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarLista(array) {
    for (const element of array) {
        console.log(element);
    }
    if (array.length === 0) {
        console.log("Lista vacía");
    }

    return `Tamanio de la lista: ${array.length}`;
}

// prueba lista vacia
let resultado1 = mostrarLista([])
console.log(resultado1);

// prueba con datos en lista
let resultado2 = mostrarLista(array)
console.log(resultado2);