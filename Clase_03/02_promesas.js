//Promesas
const dividirConPromesa = (dividendo, divisor) => {

    return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        if (divisor === 0) {
            reject("No se puede dividir por cero.");//La promesa no se puede cumplir para este caso...
        } else {
            resolve(dividendo / divisor); //OJO le estoy pasando el valor resultado de esta operación, 
            //Tambien podria definir otra funcion y devolver un resultado unico. 
        }
    });
};
console.log("Dividiendo usando Promesas, Resultado:");
// console.log(dividirConPromesa(2, 5));
console.log(dividirConPromesa(2, 0));


// implementacion con then y catch
// dividirConPromesa(5, 0)
//     .then(ressultado => console.log(ressultado))
//     .catch(error => console.log(error))