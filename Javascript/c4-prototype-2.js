function Animal(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
    this.ladrar = () => "guau, guau";
}

const perro = new Animal("Firulais", "Canina");

console.log(perro.nombre);

// revisamos si las instancias creadas pertenecen efectivamente a los objetos definidos.

console.log(perro instanceof Animal);
console.log(Animal instanceof Object);

function Perro(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
    this.ladrar = () => "guau, guau";
}

const firu = new Perro("Firu", "Canina");

console.log(firu instanceof Animal);

console.log("--------------------------------------------")

// generamos herencia Animal -> Perro

function Perro2() {

}

Perro2.prototype = new Animal(); // no es la mejor forma debido a creacion de instancias, uso de memoria, etc

console.log(Perro2.prototype.constructor);

const kira = new Perro2();

console.log(firu);
console.log(Object.getPrototypeOf(firu));

console.log("--------------------------------------------")

console.log(kira);
console.log(Object.getPrototypeOf(kira));

console.log("--------------------------------------------")
