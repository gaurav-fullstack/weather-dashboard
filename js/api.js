import { API_KEY, API_URL, DEFAULT_LOCALE } from './config.js';

export async function fetchWeather(cityName) {

    try {
        const response = await fetch(`${API_URL}?q=${cityName}&units=metric&appid=${API_KEY}`);

        const data = await response.json(); // <-- await is required

        if (!(data.cod === 200)) {
            return null;
        }
        // console.log("Weather API Object ", data);

        return {
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].description,
            humidity: data.main.humidity,
            country: data.sys.country,
            feelsLike: data.main.feels_like,
            windSpeed: data.wind.speed,
            icon: data.weather[0].icon,
            date: data.dt
        };
    }
    catch {
        return new Error('Unable to fetch weather. Please try again!')
    }

}
