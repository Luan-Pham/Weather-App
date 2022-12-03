const searchBtn = document.getElementById('button-addon2');
const dashBoard = document.getElementById('dashboard');
const foreCast = document.getElementById('forecast');
const apiKey = '84f4552f8265e604690655d0c9488cfe';
const btnContainer = document.getElementById('previousSearch');

function search() {
  const location = document.getElementById('searchValue').value;
  console.log(location);
  localStorage.setItem(location, location);

  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=imperial`;
  console.log(apiURL);
  fetch(apiURL)
    .then((response) => response.json())
    .then(
      (data) => (console.log(data), displayWeather(data), displayForecast(data))
    );
}

function displayWeather(data) {
  $(dashBoard).html(`<div class="container">
  <h1 class="display-4">${data.city.name}</h1>
  <p class="lead">Temperature: ${data.list[0].main.feels_like} °F
  <br>
  Wind: ${data.list[0].wind.speed} MPH
  <br>
  Humidity: ${data.list[0].main.humidity} %</p>
</div>`);
}

function displayForecast(data) {
  $(foreCast).empty();
  for (let i = 1; i < 6; i++) {
    $(foreCast).append(`<div class="card" style="width:20%">
    <div class="card-body">
      <h5 class="card-title"> Day ${i}</h5>
      <h6 class="card-subtitle mb-2">${data.list[i].weather[0].description}</h6>
      <p class="card-text">
      Temperature: ${data.list[i].main.feels_like} °F
      </p>
      <p class="card-text">
      Wind: ${data.list[i].wind.speed} MPH
      </p>
      <p class="card-text">
      Humidity: ${data.list[i].main.humidity} %
      </p>
    </div>`);
  }
}

// function oldSearch() {
//   $(btnContainer).append(`<button
//   class="btn btn-primary"
//   type="submit"
//   value="submit"
//   id="button-addon2"
// >
//   Search
// </button>`);
// }

searchBtn.addEventListener('click', search);
