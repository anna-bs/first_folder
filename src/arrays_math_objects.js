let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter your city");
city = city.toLowerCase();
if (city === "paris") {
  alert(
    `It is currently ${Math.round(weather.paris.temp)}°C (${Math.round(
      (weather.paris.temp * 9) / 5 + 32
    )}°F) in ${city} with a humidity of ${weather.paris.humidity}%`
  );
} else if (city === "tokyo") {
  alert(
    `It is currently ${Math.round(weather.tokyo.temp)}°C (${Math.round(
      (weather.tokyo.temp * 9) / 5 + 32
    )}°F) in ${city} with a humidity of ${weather.tokyo.humidity}%`
  );
} else if (city === "lisbon") {
  alert(
    `It is currently ${Math.round(weather.lisbon.temp)}°C (${Math.round(
      (weather.lisbon.temp * 9) / 5 + 32
    )}°F) in ${city} with a humidity of ${weather.lisbon.humidity}%`
  );
} else if (city === "san francisco") {
  alert(
    `It is currently ${Math.round(
      weather["san francisco"].temp
    )}°C (${Math.round(
      (weather["san francisco"].temp * 9) / 5 + 32
    )}°F) in ${city} with a humidity of ${weather["san francisco"].humidity}%`
  );
} else if (city === "oslo") {
  alert(
    `It is currently ${Math.round(weather.oslo.temp)}°C (${Math.round(
      (weather.oslo.temp * 9) / 5 + 32
    )}°F) in ${city} with a humidity of ${weather.oslo.humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
