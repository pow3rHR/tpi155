let promise = new Promise(function(resolve, reject){

    setTimeout(function() {
        if(true)
            resolve("Se resolvio con exito");
        reject(new Error("Error al cargar datos"));
    }, "3000");
});

console.log(promise); // primer estado.

promise.then(function(data){
    console.log(data);
},
function(error){
    console.log(error);
})

console.log("Llegue primero Yujuuuuu");