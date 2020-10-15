//City Name & Api's//
let txtcities = document.querySelector("#txtboxplaceholder");
let h1 = document.querySelector("#city");
let btnSearchcityname = document.querySelector("#btn-search");
btnSearchcityname.addEventListener("click", weather);

function weather(event) {
  event.preventDefault();
  h1.innerHTML = txtcities.value;
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    `${txtcities.value}` +
    "&appid=3e9bf67ecf247b8b42e8d798f8757586&units=metric";
  // console.log(apiUrl);
  axios.get(apiUrl).then(worldWeather);
}
function worldWeather(response) {
  console.log(response);
  let climate = document.querySelector("#typeweather");
  // console.log(response.data.weather[0].main);
  climate.innerHTML = `Hey : ${response.data.weather[0].main}`;
  let tempdegree = document.querySelector("#temperature");
  let tempvalue = Math.round(`${response.data.main.temp}`);
  tempdegree.innerHTML = `${tempvalue}`;
  let particle1 = document.querySelector("#variable1");
  // console.log(response.data.main.humidity);
  let value1 = Math.round(`${response.data.main.humidity}`);
  particle1.innerHTML = `Humidity: ${value1}%`;
  let particle2 = document.querySelector("#variable2");
  // console.log(response.data.wind.speed);
  let value2 = Math.round(`${response.data.wind.speed}`);
  particle2.innerHTML = `Wind: ${value2}Km/h`;
}
//Current Place//
let cities = document.querySelector("#btn-current");
cities.addEventListener("click", currentplace);
function currentplace(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(mylocation);
}

function mylocation(position) {
  let currentAPI =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    `${position.coords.latitude}` +
    "&lon=" +
    `${position.coords.longitude}` +
    "&appid=3e9bf67ecf247b8b42e8d798f8757586&units=metric";
  console.log(`${currentAPI}`);
  axios.get(currentAPI).then(currentCity);

  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
function currentCity(response) {
  console.log(response);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;
}

//Day and Time//
let time = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[time.getDay()];
console.log(day);
let hour = time.getHours();
let minute = time.getMinutes();
let timeandday = document.querySelector("#dayandtime");
timeandday.innerHTML = `${day}, ${hour}:${minute}`;
