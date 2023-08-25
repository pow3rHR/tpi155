const getData1 = function() {

    const options = {
        method: 'GET'
      };

    const data = fetch('https://pokeapi.co/api/v2/pokemon/pikachu', options)
    .then(response => response.text());

    return data;
}

getData1().then(response => console.log(response));

console.log("/////////////////////////////////////////");
/////////////////////////

const getData2 = async function() {
    const options = {
        method: "GET"
    };

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", options);
    const data = await response.text();
    return data;
}

getData2().then(data => {
    console.log(data);
}).catch(error => {
    console.error("Error:", error);
});