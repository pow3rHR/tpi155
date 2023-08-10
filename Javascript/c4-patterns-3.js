const Persona = function(nombre, apellido) {
    const presentarse = function() {
        console.log(`Mi nombre es ${nombre} ${apellido}, un placer`);
    }

    return { presentarse };
}

const Estudiante = function(nombre, apellido) {
    const prototype = Persona(nombre, apellido);
    const estudiar = function() {
        console.log("Estudiando Javascript toda la noche...")
    }

    return Object.assign({}, prototype, {estudiar});
}

const pepito = Estudiante("Pepito", "Perez");

pepito.presentarse();
pepito.estudiar();