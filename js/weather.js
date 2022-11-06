const API_KEY = "4936c9a24b9ace42805ab5b43dc95e23";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `
  https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = ` | ${data.weather[0].main} | ${data.main.temp}℃`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weathere for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
