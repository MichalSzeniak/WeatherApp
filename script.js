const api = { 
    key: '2faf5362af8831e653fa8cc1ca8dd326',
    baseurl: 'api.openweathermap.org/data/2.5/weather?q='
}

const searchbox = document.querySelector(".searchbox");
searchbox.addEventListener('keypress', (evt) => {
    if (evt.keyCode == 13) {
        searchValue = searchbox.value
        console.log(searchValue);
        apiUrl ()
    }
});

const apiUrl = () => {
    const url = `${api.baseurl}${searchValue}&units=metrinc&APPID=${api.key}`;
    console.log(url);

    fetch(url)
        .then((data) => console.log(data.json()))
}
