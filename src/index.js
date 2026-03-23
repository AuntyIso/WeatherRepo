 function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);
    let cityElement = document.innerHTML = querySelector("#city");

 }
 
 
 function searchCity(city) {
    let apikey = "7a4f5a11f027034d307t909d5doccba8";
    let apiurl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric';
    axios.get(apiurl).then(refreshWeather);

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

