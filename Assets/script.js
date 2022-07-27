// API key = 84f4552f8265e604690655d0c9488cfe

// 5 day forecast API = api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}

var searchBtn = document.getElementById("searchBtn");

function search() {
  var location = document.getElementById("location").value;
  console.log(location);
  var apiURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    location +
    "&units=imperial&appid=84f4552f8265e604690655d0c9488cfe";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => (console.log(data), displayWeather(data)));
}

function displayWeather(data) {
  const { temp, humidity } = data.list[0].main;
  const { main, description, icon } = data.list[0].weather[0];

  console.log(temp, humidity);
  console.log(main, description, icon);
  // const { name } = data;
  // const { description } = data.list[0].weather;
  // console.log(description);
  // console.log(name);
}

searchBtn.addEventListener("click", search);
