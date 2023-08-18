const getData = async function() {

    const options = {
        method: "GET"
      };

    await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", options)
        .then(response => response.text())
        .then(data => {
            return data;
        })
}

const data = getData();
console.log(data);