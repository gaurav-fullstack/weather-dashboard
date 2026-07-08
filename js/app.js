import { validateInput } from './utils.js';
import { searchBox, searchForm, cardContainer } from './elements.js';
import { fetchWeather } from './api.js';
import { createWeatherCard, showLoader, showErrorCard, renderWeather } from './ui.js';

searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // optional: prevent page reload
    handleSearch();
});

function handleSearch() {
    const cityName = searchBox.value.trim();

    if (!validateInput(cityName))
        displayError();
    else
        executeSearch(cityName);

}

function displayError() {
    console.log("Enter correct value.");
}

export async function executeSearch(cityName) {
    const cityData = await fetchWeather(cityName);

    if (!cityData) {
        showErrorCard();
        return;
    }

    renderWeather(cityData);

}





