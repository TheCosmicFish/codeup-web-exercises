const getWeather2 = 'https://api.openweathermap.org/data/2.5/weather?lat=30&lon=-97&appid=c3ca25fb3bc74b8420b1b6ca34fe1a33\n'

function getWeather(lat, lon) {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c3ca25fb3bc74b8420b1b6ca34fe1a33
`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}



