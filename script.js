const api = { 
    key: '2faf5362af8831e653fa8cc1ca8dd326',
    baseurl: 'http://api.openweathermap.org/data/2.5/weather?q='
}

const searchbox = document.querySelector(".searchbox");
const city = document.querySelector(".city")

searchbox.addEventListener('keypress', (evt) => {
    if (evt.keyCode == 13) {
        searchValue = searchbox.value;
        console.log(searchValue);
        apiUrl ()
    }
});

const apiUrl = () => {
    const apiiurl = `${api.baseurl}${searchValue}&units=metric&APPID=${api.key}`;
    console.log(apiiurl);

    fetch(apiiurl)
        .then( (data) => data.json())
        .then( (weather) => generate(weather))
generate()
}

const generate = (data) => {
    console.log(data);
    console.log(data.name);
    console.log(`${data.main.temp}`);
    city.innerHTML = data.name
}