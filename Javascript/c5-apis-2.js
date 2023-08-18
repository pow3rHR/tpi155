fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(function(response) {
    console.log(response.json());
  })
  .catch(function(err) {
    console.log(err);
  });

  