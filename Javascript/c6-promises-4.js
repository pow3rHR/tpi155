function meVoyATardar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Estoy listo!');
      }, 3000);
    });
  }
  
  async function soyAsincrona() {
    console.log('Esperando respuesta...');
    const resultado = await meVoyATardar();
    console.log(resultado);
  }
  
  soyAsincrona();

  