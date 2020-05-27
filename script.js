const api = { 
    key: '2faf5362af8831e653fa8cc1ca8dd326',
    baseurl: 'http://api.openweathermap.org/data/2.5/weather?q='
}

const searchbox = document.querySelector(".searchbox");
const city = document.querySelector(".city");
const icon = document.querySelector(".icon__src");
const country = document.querySelector(".country");
const temp = document.querySelector(".temp");
const desctiption = document.querySelector(".desctiption");
const minMax = document.querySelector(".min-max");
const searchButton = document.querySelector(".search-button")
const weatherContainer = document.querySelector(".weather-container")

searchButton.addEventListener('click', () => {
    searchValue = searchbox.value;
    icon.classList.add("icon--js");
    apiUrl ()
})

searchbox.addEventListener('keypress', (evt) => {
    if (evt.keyCode == 13) {
        searchValue = searchbox.value;
        console.log(searchValue);
        icon.classList.add("icon--js");
        apiUrl()
    }
});

const apiUrl = () => {
    const apiiurl = `${api.baseurl}${searchValue}&units=metric&APPID=${api.key}`;
    console.log(apiiurl);

    fetch(apiiurl).then( (data) => data.json())
    .then(generate);
    // .then( (weather) => generate(weather))
}

const generate = (data) => {
    city.innerHTML = `${data.name}`;
    country.innerHTML = `${data.sys.country}`
    temp.innerHTML = `${data.main.temp}°c`;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    desctiption.innerHTML = `${data.weather[0].description}`;
    minMax.innerHTML = `${(data.main.temp_min).toFixed()}°c / ${(data.main.temp_max).toFixed()}°c`

    if(data.main.temp < 0) {
        weatherContainer.classList.add("weather-container--js");
    } else {
        weatherContainer.classList.remove("weather-container--js");
    }
}