// API key = 84f4552f8265e604690655d0c9488cfe

// 5 day forecast API = api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}

var searchBtn = document.getElementById("searchBtn");

function search() {
  var apiURL =
    "api.openweathermap.org/data/2.5/forecast?q=" +
    location +
    "&appid=84f4552f8265e604690655d0c9488cfe";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

searchBtn.addEventListener("click", search);
