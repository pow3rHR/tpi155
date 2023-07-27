const persona = {
    nombre: "Diego",
    apellido: "Herrera",
    edad: 15,
    saludar: function() {
        return "hola, mi nombre es " + this.nombre
    }
}

console.log(persona.saludar());

// Los objetos literales pueden tener comportamiento (métodos) que pueden acceder a propiedades.
// También pueden combinarse con más métodos internos para lograr un comportamiento más complejo.
