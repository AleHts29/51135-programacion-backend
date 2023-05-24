const SingletonClass = require('./singleton');

let clase1 = SingletonClass.getIntance();
let clase2 = SingletonClass.getIntance();
let clase3 = SingletonClass.getIntance();
let clase4 = SingletonClass.getIntance();

console.log(clase1);
console.log(clase2);
console.log(clase3);
console.log(clase4);