import { formatDate } from './utils.js';
import { cardContainer } from './elements.js';
import { executeSearch } from './app.js';
import { DEFAULT_LOCALE } from './config.js';

export function createWeatherCard(cityData) {

    const card = `<div class="weather-card">
                    <div class="card-content">

                        <!-- Header -->
                        <div class="card-header">
                            <div class="location">
                                <h2 id="location">${cityData.city} <span>${cityData.country}</span></h2>
                                <p id="currentDate">  ${formatDate(cityData.date)}</p>
                            </div>
                            <div id="weatherIcon" class="weather-icon"> <img width="120" src="https://openweathermap.org/img/wn/${cityData.icon}@2x.png" /></div>
                        </div>

                        <!-- Temperature -->
                        <div class="temp-section">
                            <div class="temp-row">
                                <span id="temperatureValue" class="temp-main">${cityData.temperature}</span>
                                <span class="temp-unit">°C</span>
                            </div>
                            <p class="condition" id="tempCondition">${cityData.condition}</p>
                            <p class="feels-like" id="feelsLike">Feels like : ${cityData.feelsLike}</p>
                        </div>

                        <!-- Divider -->
                        <hr class="divider" />

                        <!-- Stats -->
                        <div class="stats-grid">
                            <div class="stat-box">
                                <div class="stat-icon">💧</div>
                                <div class="stat-value" id="humidityValue">${cityData.humidity}%</div>
                                <div class="stat-label">Humidity</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-icon">🌬️</div>
                                <div class="stat-value" id="windSpeed">${cityData.windSpeed} m/s</div>
                                <div class="stat-label">Wind</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-icon">☀️</div>
                                <div class="stat-value" id="uvIndex">V. High</div>
                                <div class="stat-label">UV Index</div>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div class="card-footer">
                           <span class="update-time" id="updatedTime"> ${new Date().toLocaleString()} </span>
                            <button class="refresh-btn" onclick= "executeSearch('${cityData.city}')">↻ Refresh</button>
                        </div>

                    </div>
                </div>`;


    return card;

}

export function showLoader() {
    const str = `
         <div class="loader">
                    Loading...
                </div>
    `;

    cardContainer.innerHTML = str;

}

export function showErrorCard() {
    const str = `  <div class="weather-card error-card">
    <div class="card-content">

        <!-- Header -->
        <div class="card-header error-header">
            <div class="location">
                <h2>⚠️ Weather Unavailable</h2>
                <p>${new Date().toLocaleString(DEFAULT_LOCALE)}</p>
            </div>
        </div>

        <!-- Error Icon -->
        <div class="error-section">
            <div class="error-icon">🌍</div>

            <h3 id="errorTitle">City Not Found</h3>

            <p id="errorMessage">
                We couldn't find weather information for the city you entered.
            </p>
        </div>

        <hr class="error divider">

        <!-- Suggestions -->
        <div class="error-help">
            <h4>Try the following:</h4>

            <ul>
                <li>✔ Check the city name spelling.</li>
                <li>✔ Include the country (e.g. London, UK).</li>
                <li>✔ Verify your internet connection.</li>
            </ul>
        </div>

        <!-- Footer -->
        <div class="card-footer">
            <span class="error update-time">
                ${new Date().toLocaleString("en-IN")}
            </span>

            <button class="error refresh-btn" onclick="location.reload()">
                ↻ Try Again
            </button>
        </div>

    </div>
</div>`;

    cardContainer.innerHTML = str;
}


export function renderWeather(cityData) {
    // console.log("city data ", cityData);
    cardContainer.innerHTML = createWeatherCard(cityData);
}
