// Definir una funcion SUMA()
const sumaConPromesas = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Resiviendo promesa para SUMA: ${a} + ${b}`);
        if (a, b === 0) {
            reject("Operacion innecesaria")
        } else {
            let resultado = a + b;
            resolve(
                // TERNARIO ---> (Condicion) ? true : false
                resultado < 0 ? reject("La calculadora sólo debe devolver valores positivos") : resultado
            )
        }
    })
}

// Definir una funcion RESTA()
const restaConPromesas = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Resiviendo promesa para RESTA: ${a} - ${b}`);
        if (a, b === 0) {
            reject("Operacion innecesaria")
        } else {
            let resultado = a - b;
            resolve(
                // TERNARIO ---> (Condicion) ? true : false
                resultado < 0 ? reject("La calculadora sólo debe devolver valores positivos") : resultado
            )
        }
    })
}


// Definir una funcion MULTIPLICACION()
const multiplicacionConPromesas = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Resiviendo promesa para Multiplicacion: ${a} * ${b}`);
        if (a, b === 0) {
            reject("Operacion innecesaria")
        } else {
            let resultado = a * b;
            resolve(
                // TERNARIO ---> (Condicion) ? true : false
                resultado < 0 ? reject("La calculadora sólo debe devolver valores positivos") : resultado
            )
        }
    })
}


// Definir una funcion DIVISION()
const divisionConPromesas = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`Resiviendo promesa para Multiplicacion: ${dividendo} / ${divisor}`);
        if (divisor === 0) {
            reject("Operacion innecesaria")
        } else {
            resolve(dividendo / divisor)
        }
    })
}



// Definimos ambiente/funcion Async
const caculos = async (valor1, valor2, operacionCallback) => {
    console.log(`Se esta ejecutando por funcion Async`);

    try {
        let resultado = await operacionCallback(valor1, valor2)
        console.log(resultado);
    } catch (error) {
        console.log("No se pudo cumplir la promesa, Error: " + error);
    }
}

caculos(-2, 1, sumaConPromesas);
caculos(-2, 1, restaConPromesas);
caculos(-2, 1, multiplicacionConPromesas);
caculos(-2, 1, divisionConPromesas);