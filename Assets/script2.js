const searchBtn = document.getElementById('button-addon2');
const apiKey = '84f4552f8265e604690655d0c9488cfe';

function search() {
  const location = document.getElementById('searchValue').value;

  console.log(location);

  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;
  console.log(apiURL);
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

searchBtn.addEventListener('click', search);
