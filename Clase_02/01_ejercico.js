// scope de las variables 

// let i = 10;

const testScope = function () {
    let i = 0;
    console.log(i);

    if (true) {
        const variable = 12
        console.log(variable);
    }
    // console.log(variable);
    return i + 5
}

let test = testScope()
console.log(test);


// Funciones 
// const suma = (a, b) => {
//     let result;
//     result = a + b;
//     return result
// }
// console.log(suma(2, 5))


const suma = (a, b) => a + b
console.log(`El resultado de la suma es ${suma(2, 5)}`)








