function Animal(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
    this.ladrar = () => "guau, guau";
}

// sintaxis alternativa y sugerida
function Perro() {

}

Object.setPrototypeOf(Perro.prototype, Animal.prototype);

console.log(Perro.prototype.constructor);

console.log(Object.getPrototypeOf(Perro.prototype));

// Debido a que el metodo setPrototype hace una herencia mas fidedigna del prototype
// si queremos "Heredar" tendremos que crear las propiedades y metodos en el prototype.

console.log("---------------------------------------")

function Forma(altura, anchura) {
    this.altura = altura;
    this.anchura = anchura;
}

Forma.prototype.calcularArea = function() {
    return this.altura * this.anchura;
}

Forma.prototype.altura = 0;
Forma.prototype.anchura = 0;



function Cuadrado(altura, anchura) {
    Forma.call(this, altura, anchura);
}

Object.setPrototypeOf(Cuadrado.prototype, Forma.prototype);

console.log(Object.getPrototypeOf(Forma.prototype));
console.log(Object.getPrototypeOf(Cuadrado.prototype));

const miCuadrado = new Cuadrado(5,5);

console.log(miCuadrado.calcularArea());

console.log(miCuadrado instanceof Forma)