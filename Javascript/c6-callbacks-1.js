var fs = require('fs');
var n = undefined;

function sumar() {
  // función que se espera sea asíncrona
  fs.readFile('numero.txt', function leerNumero(err, contenido) {
    n = parseInt(contenido);
    n++;
  })
}

sumar();

console.log(n)