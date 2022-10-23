let now = new Date();

let time = document.querySelector("#current-time");
let day = document.querySelector("#day");
let date = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMin = now.getMinutes();
let currentDate = now.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let currentMonth = months[now.getMonth()];
let currentYear = now.getFullYear();

time.innerHTML = `${currentHour}:${currentMin}`;
day.innerHTML = `${currentDay}`;
date.innerHTML = `${currentDate} ${currentMonth} ${currentYear}`;

function currentTemp(response) {
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
}

function searchCity(city) {
  city.preventDefault();
  let searchInput = document.querySelector("#find-city");
  let currentCity = document.querySelector("#selected-city");
  let apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(currentTemp);
  currentCity.innerHTML = `${searchInput.value}`;
}

let city = document.querySelector("#city-form");
city.addEventListener("submit", searchCity);

function celsius(tempC) {
  tempC.preventDefault();
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = 23;
}

function fahrenheit(tempF) {
  tempF.preventDefault();
  let currentTemperature = document.querySelector("#temperature");
  let temperature = currentTemperature.innerHTML;
  temperature = Number(temperature);
  currentTemperature.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let celsiusUnit = document.querySelector("#celsius");
celsiusUnit.addEventListener("click", celsius);

let fahrenheitUnit = document.querySelector("#fahrenheit");
fahrenheitUnit.addEventListener("click", fahrenheit);
