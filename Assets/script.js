// API key = 84f4552f8265e604690655d0c9488cfe

// 5 day forecast API = api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

var searchBtn = document.getElementById("searchBtn");
var Day0 = document.getElementById("0");
var Day1 = document.getElementById("1");
var Day2 = document.getElementById("2");
var Day3 = document.getElementById("3");
var Day4 = document.getElementById("4");

function search() {
  var location = document.getElementById("location").value;
  console.log(location);
  var apiURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    location +
    "&units=imperial&appid=84f4552f8265e604690655d0c9488cfe";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => (console.log(data), displayWeather0(data), displayWeather1(data), displayWeather2(data), displayWeather3(data), displayWeather4(data)));
}

function displayWeather0(data) {
  const {temp, humidity} = data.list[0].main;
  const {main, description, icon}= data.list[0].weather[0];
  Day0.innerHTML = "Temp:" + temp
  Day0.append(" Humidity:" + humidity)
  Day0.append(" Description:" + description)
  Day0.append(" Temp:" + main)
}

function displayWeather1(data) {
  const {temp, humidity} = data.list[1].main;
  const {main, description, icon}= data.list[1].weather[0];
  Day1.innerHTML = "Temp:" + temp
  Day1.append(" Humidity:" + humidity)
  Day1.append(" Description:" + description)
  Day1.append(" Temp:" + main)
}
function displayWeather2(data) {
  const {temp, humidity} = data.list[2].main;
  const {main, description, icon}= data.list[2].weather[0];
  Day2.innerHTML = "Temp:" + temp
  Day2.append(" Humidity:" + humidity)
  Day2.append(" Description:" + description)
  Day2.append(" Temp:" + main)
}
function displayWeather3(data) {
  const {temp, humidity} = data.list[3].main;
  const {main, description, icon}= data.list[3].weather[0];
  Day3.innerHTML = "Temp:" + temp
  Day3.append(" Humidity:" + humidity)
  Day3.append(" Description:" + description)
  Day3.append(" Temp:" + main)
}
function displayWeather4(data) {
  const {temp, humidity} = data.list[4].main;
  const {main, description, icon}= data.list[4].weather[0];
  Day4.innerHTML = "Temp:" + temp
  Day4.append(" Humidity:" + humidity)
  Day4.append(" Description:" + description)
  Day4.append(" Temp:" + main)
}
// function displayWeather(data) {
//   const { temp, humidity } = data.list[0].main;
//   const { main, description, icon } = data.list[0].weather[0];

//   console.log(temp, humidity);
//   console.log(main, description, icon);

//   $(".info").each(function () {
//     var currentDay = $(this).attr("id");
//     console.log(currentDay);
//     const { temp, humidity } = data.list[currentDay].main;
//     const { main, description, icon } =
//       data.list[currentDay].weather[currentDay];
//     ($(this).textContent = temp), humidity, main, description, icon;
//   });
// const { name } = data;
// const { description } = data.list[0].weather;
// console.log(description);
// console.log(name);
// }

searchBtn.addEventListener("click", search);
