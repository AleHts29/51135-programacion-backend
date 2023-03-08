// SetTimeout

const temporizador = (callback) => {
    setTimeout(() => {
        callback()
        console.log("Tarea finalizada!!");
    }, 5000);
}

// let operacion = () => console.log("Realizando operacion con setTimeout()");
// console.log("Iniciando tarea con timeout!");
// temporizador(operacion);

let array = []


// SetInterval
let contador = () => {
    let contador = 1;
    console.log("Realizando operacion con setInterval!!");
    let timer = setInterval(() => {
        console.log(contador++);

        // contamos el flujo con clearInterval
        if (contador > 5) {
            clearInterval(timer);
        }
    }, 1000);

    console.log("Tarea finalizada");
}

console.log("Iniciando tarea con interval!");
contador();

