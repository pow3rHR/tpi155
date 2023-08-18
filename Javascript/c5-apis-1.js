// URL (endpoint)
fetch('https://api.openweathermap.org/data/2.5/weather?lat=13.47968247583704&lon=-88.17767357039016&appid=78a21ef19440fd21f659455f994e9e78')
  .then(function(response) {
    console.log(response.json());
  })
  .catch(function(err) {
    console.log(err);
  });

  