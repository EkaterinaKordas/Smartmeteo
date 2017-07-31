"use strict";

var dataWeather = {};

// Set all weather data on weather forecast page
function fillInData() {
    dataWeather = JSON.parse(localStorage.getItem("dataWeather"));

    switchBgOnLoad(dataWeather);
    fillInCurrentWeather(dataWeather);
    fillInTableWeather(dataWeather, ".table-weather-header");
    fillInTableWeather(dataWeather, ".table-weather");
    fillInDataByTimeOfDay(dataWeather);
}

document.addEventListener("DOMContentLoaded", function () {
    fillInData();
});






