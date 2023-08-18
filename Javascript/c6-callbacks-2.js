const fs = require('fs');
let n = undefined;

function sumar(callback) {
  // función que se espera sea asíncrona
  fs.readFile('Javascript/numero.txt', function leerNumero(err, contenido) {
    n = parseInt(contenido);
    n++;
    callback();
  })
}

function mostrarNumero() {
    console.log(n);
}

sumar(mostrarNumero);