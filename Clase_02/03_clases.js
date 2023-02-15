class Auto {
    constructor(color, marca) {
        this.color = color;
        this.marca = marca;
    }


    // Metodos
    frenar() {
        return 'se frena el auto'
    }

    acelerar() {
        return `se acelera el auto de color: ${this.color}`
    }
}



// instaciamos la clase 
const auto1 = new Auto("negro", "Peugeot")
const auto2 = new Auto("Azul", "Ford")

console.log(auto1);
console.log(auto2);

console.log(auto1.acelerar());