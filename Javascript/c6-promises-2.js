let promise = new Promise(function(resolve, reject) {

    resolve(
        new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve("Se resolvio con exito");
            }, "2000");
        })
    )
});

console.log(promise); // primer estado.

promise.then(function(data){
    console.log(data);
});

console.log("De nuevo Llegue primero...");

// ahora que ya conocimos un poco acerca de promesas
// realiza una pequena investigacion sobre los bloques .catch y .finally
// crea un ejemplo con cada uno.

