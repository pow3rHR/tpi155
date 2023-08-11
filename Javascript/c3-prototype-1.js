/*console.log(Object);
console.log(Object.prototype);

const miObjeto = {};

console.log(miObjeto.__proto__);*/

// intentemos hacer lo anterior en un navegador y observemos la diferencia.

/*function Persona() {
    this.nombre = "Diego";
    this.saludar = function() {
        console.log("Hola")
    }
}

console.log(Persona.__proto__);
Persona.prototype.saludar = function saludar() {console.log("Adios!")}
const diego = new Persona();
console.log(diego.__proto__);
diego.saludar()*/

function Animal(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
    this.ladrar = () => "guau, guau";
}

const perro = new Animal("Firulais", "Canina");

console.log(perro.nombre);