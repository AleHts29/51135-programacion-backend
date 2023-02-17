class ContadorBanco {
    static cuentaGlobal = 0;

    constructor(responsable) {
        this.responsable = responsable;
        this.cuentaIndividual = 0;
    }

    //Metodos
    obtenerResponsable() {
        return this.responsable;
    }
    obtenerCuentaIndividual() {
        return this.cuentaIndividual;
    }

    obtenerCuentaGlobal() {
        return ContadorBanco.cuentaGlobal;
    }

    contar() {
        this.cuentaIndividual++;
        ContadorBanco.cuentaGlobal++;
    }
}

const r1 = new ContadorBanco('Juan')
const r2 = new ContadorBanco('Seba')

r1.contar()
r2.contar()

console.log(r1)
console.log(r2)

// console.log(r2.obtenerCuentaGlobal())

console.log(r1.obtenerCuentaIndividual())
console.log(r2.obtenerCuentaIndividual())

console.log(r1.obtenerCuentaGlobal())
console.log(r2.obtenerCuentaGlobal())