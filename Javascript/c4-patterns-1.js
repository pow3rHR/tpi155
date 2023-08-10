const Persona = function(nombre, apellido) {
    const saludar = function() {
        console.log(`Saludos a todos, mi nombre es ${nombre}`);
    }
    const despedirse = function() {
        console.log("Adios a todos.");
    }

    return { nombre, apellido, saludar, despedirse }
}

const diego = Persona("Diego", "Herrera");

diego.saludar();

