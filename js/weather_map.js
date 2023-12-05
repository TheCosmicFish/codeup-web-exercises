

function getWeather(lat, lon) {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c3ca25fb3bc74b8420b1b6ca34fe1a33
`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperatureKelvin = data.main.temp;
            const temperatureFahrenheit = ((temperatureKelvin - 273.15) * 9 / 5 + 32).toFixed(2); // Convert to Fahrenheit

            const feelsLikeKelvin = data.main.feels_like;
            const feelsLikeFahrenheit = ((feelsLikeKelvin - 273.15) * 9 / 5 + 32).toFixed(2); // Convert to Fahrenheit

            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const weatherDescription = data.weather[0].description;
            const locationName = data.name;

            console.log(data);

            document.getElementById('temperature').textContent = `Temperature: ${temperatureFahrenheit}°F`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;
            document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;
            document.getElementById('location').textContent = `Location: ${locationName}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}


const foreCast = `https://api.openweathermap.org/data/2.5/forecast?lat=43&lon=24&appid=c3ca25fb3bc74b8420b1b6ca34fe1a33`

// Function to fetch weather data based on latitude and longitude
function getForecast(lat, lon) {

    const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c3ca25fb3bc74b8420b1b6ca34fe1a33`;

    fetch(url2)
        .then(response => response.json())
        .then(data => {
            processForecast(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to process the weather data and for calculating a 4-day average forecast
function processForecast(data) {
    const dailyData = {};

    // Group data by day
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toISOString().split('T')[0];

        if (!dailyData[day]) {
            dailyData[day] = {temps: [], humidities: [], windSpeeds: [], descriptions: []};
        }

        dailyData[day].temps.push(item.main.temp);
        dailyData[day].humidities.push(item.main.humidity);
        dailyData[day].windSpeeds.push(item.wind.speed);
        dailyData[day].descriptions.push(item.weather[0].description);
    });

    // Calculate averages and select description for each day
    const fourDayForecast = Object.keys(dailyData).slice(1, 5).map(day => {
        const dayData = dailyData[day];
        const avgTempKelvin = dayData.temps.reduce((acc, temp) => acc + temp, 0) / dayData.temps.length;
        const avgTempFahrenheit = ((avgTempKelvin - 273.15) * 9 / 5 + 32).toFixed(2); // Convert to Fahrenheit
        const avgHumidity = dayData.humidities.reduce((acc, hum) => acc + hum, 0) / dayData.humidities.length;
        const avgWindSpeed = dayData.windSpeeds.reduce((acc, ws) => acc + ws, 0) / dayData.windSpeeds.length;
        const weatherDescription = dayData.descriptions[0];

        return {
            date: day,
            avgTemp: avgTempFahrenheit,
            avgHumidity: avgHumidity.toFixed(2),
            avgWindSpeed: avgWindSpeed.toFixed(2),
            weatherDescription: weatherDescription
        };
    });


    // Display the forecast
    displayForecast(fourDayForecast);
}

function displayForecast(forecast) {
    forecast.forEach((dayForecast, index) => {
        let content = `
            <div>
                <h5>Date: ${dayForecast.date}</h5>
                <p><strong>Temp:</strong> ${dayForecast.avgTemp}°F, 
                    <strong>Humidity:</strong> ${dayForecast.avgHumidity}%, 
                    <strong>Wind:</strong> ${dayForecast.avgWindSpeed} m/s, 
                    <strong>Weather:</strong> ${dayForecast.weatherDescription}
                </p>
            </div>
        `;

        if (index === 0) {
            document.getElementById('Day1').innerHTML = content;
        } else if (index === 1) {
            document.getElementById('Day2').innerHTML = content;
        } else if (index === 2) {
            document.getElementById('Day3').innerHTML = content;
        } else if (index === 3) {
            document.getElementById('Day4').innerHTML = content;
        }
    });
}























