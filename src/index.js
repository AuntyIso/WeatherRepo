 function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;

    let cityElement = document.innerHTML = querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);


    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = `${date.getDay()} ${date.getHours}:${date.getMinutes()}`;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);   
 
 }
 
 function formatDate(date) {
    let day = date.getDay();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    ];
    let day =days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${}`
    }

    return `$(day) $(hours):$(minutes)`;
 } 

 function searchCity(city) {
    let apikey = "7a4f5a11f027034d307t909d5doccba8";
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiurl).then(refreshWeather);

} 

function showUser(response) {
    alert(`The user name is ${response.data.name}`);

}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input"); 
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);

}
  
    let searchFormElement = document.querySelector("#search-form"); 
    searchFormElement.addEventListener("submit", handleSearchSubmit);

    searchCity("Paris");

    let url = "https://jsonplaceholder.typicode.com/users/1";
    axios.get(url).then(showUser);
