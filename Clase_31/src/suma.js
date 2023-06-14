//Suma Refactored and optimized with Functional Programming.
// export default () => {

// };


// 2do --> definimos el el null para que pase el test
// export default (num1, num2) => {
//     if (typeof num1 != "number" || typeof num2 != "number") return null;
// };


//Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
// export default (num1, num2) => {
//     if (!num1 && !num2) return 0;
//     if (typeof num1 != "number" || typeof num2 != "number") return null;
// };



//Test 3: La función debe poder realizar la suma correctamente.
// export default (num1, num2) => {
//     if (!num1 && !num2) return 0;
//     if (typeof num1 != "number" || typeof num2 != "number") return null;
//     return num1 + num2;
// };



//Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros.
// export default (...numbers) => {
//     console.log("Entrando a la suma con arreglo de numeros: ");
//     console.log(numbers);

//     if (numbers.length === 0) return 0;
//     let validInputs = true;
//     let i = 0;
//     while (validInputs && i < numbers.length) {
//         if (typeof numbers[i] != "number") {
//             validInputs = false;
//             return null;
//         }
//         i++;
//     }
//     console.log("Valid inputs? :" + validInputs);
//     if (!validInputs) return null;
//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }

//     console.log("Resultado de la suma:");
//     console.log(result);
//     return result;
// };



// --> REFACTOR
export default (...numbers) => {
    console.log("Entrando a la suma con arreglo de numeros: ");
    console.log(numbers);

    if (numbers.length === 0) return 0;

    if (!numbers.every(num => typeof num === "number")) return null;

    let result = 0;
    result = numbers.reduce((prev, current) => prev + current);

    console.log("Resultado de la suma:");
    console.log(result);
    return result;
};