// Metodos y propiedades privadas

Potenciador = function(n) {
    const potenciar = function() {
        return n * n;
    }
    const imprimirPotencia = function() {
        console.log(`La potencia de ${n} es ${potenciar()}`);
    }

    return { imprimirPotencia }
}

const test = Potenciador(5);

//test.potenciar(); // err
test.imprimirPotencia();

