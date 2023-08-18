const getData = function() {

    const options = {
        method: "GET"
      };

    fetch("/robots.txt", options)
    .then(response => response.text())
    .then(data => {
        return data
    });
}