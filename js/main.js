//variables
let input = document.getElementById("input");
let button = document.getElementById("button");

let resultCountry = document.getElementById("resultCountry");
let weather = document.getElementById("weather");
let img = document.querySelector('img');

let temp = document.getElementById("temp");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let url = 'https://api.openweathermap.org/data/2.5/weather?q=Kutaisi&appid=cc7349b84b1a0db832a1961908c54f29';

function saba(){
    fetch(url)
    .then(response => response.json())
    .then(result => {
        let icon = result.weather[0].icon;
        resultCountry.innerHTML = "Kutaisi";
        weather.innerHTML = result.weather[0].description;
        img.src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        let tempres = result.main.temp - 273.15;
        temp.innerHTML = tempres.toFixed() + '<sup>&#8728;</sup>' + 'C';
        humidity.innerHTML = result.main.humidity + '%';
        wind.innerHTML = result.wind.speed + ' km/h';
    })
    .catch(err => err)
}

saba();

button.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=cc7349b84b1a0db832a1961908c54f29')
    .then(response => response.json())
    .then(result => {
        let icon = result.weather[0].icon;
        resultCountry.innerHTML = input.value;
        weather.innerHTML = result.weather[0].description;
        img.src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        let tempres = result.main.temp - 273.15;
        temp.innerHTML = tempres.toFixed() + '<sup>&#8728;</sup>' + 'C';
        humidity.innerHTML = result.main.humidity + '%';
        wind.innerHTML = result.wind.speed + ' km/h';
    })
    .catch(err => err)
})