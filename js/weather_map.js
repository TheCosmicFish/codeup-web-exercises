const getWeather2 = 'https://api.openweathermap.org/data/2.5/weather?lat=30&lon=-97&appid=c3ca25fb3bc74b8420b1b6ca34fe1a33\n'

function getWeather(lat, lon) {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c3ca25fb3bc74b8420b1b6ca34fe1a33
`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const windSpeed = data.wind.speed;
            const windDirection = data.wind.deg;
            const weatherDescription = data.weather[0].description;
            const visibility = data.visibility;
            const locationName = data.name;
            console.log(data);

            document.getElementById('temperature').textContent = `Temperature: ${temperature}°K`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;
            document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`

            document.getElementById('location').textContent = `Location: ${locationName}`;

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}





