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
function addZero(sd) {
  if (sd < 10) {
    sd = "0" + sd;
  }
  return sd;
}
let currentMin = addZero(now.getMinutes());
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

function displayTemperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#selected-city");
  let currentTemp = document.querySelector("#temperature");
  let feelsLike = document.querySelector("#feels-like");
  let iconElement = document.querySelector("#icon");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");

  celsiusTemperature = response.data.main.temp;

  cityElement.innerHTML = response.data.name;
  currentTemp.innerHTML = Math.round(response.data.main.temp);
  feelsLike.innerHTML = Math.round(response.data.main.feels_like);
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#find-city");
  search(searchInput.value);
}

function search(city) {
  let apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayTemperature);
}

function celsius(event) {
  event.preventDefault();
  celsiusUnit.classList.add("active");
  fahrenheitUnit.classList.remove("active");
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = Math.round(celsiusTemperature);
}

function fahrenheit(event) {
  event.preventDefault();
  celsiusUnit.classList.remove("active");
  fahrenheitUnit.classList.add("active");
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = Math.round((celsiusTemperature * 9) / 5 + 32);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", handleSubmit);

search("Berlin");

let celsiusTemperature = null;

let celsiusUnit = document.querySelector("#celsius");
celsiusUnit.addEventListener("click", celsius);

let fahrenheitUnit = document.querySelector("#fahrenheit");
fahrenheitUnit.addEventListener("click", fahrenheit);
