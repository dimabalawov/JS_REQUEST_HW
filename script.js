
window.addEventListener('DOMContentLoaded', (event) => {
    // Замените 'YOUR_API_KEY' на ваш собственный API-ключ OpenWeatherMap
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cit = document.getElementById('city');

    function getWeather() {
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url).then((response) => response.json()).then((data) => {
            const temperature = data.main.temp;
            const ct = data;
            const description = data.weather[0].description;
            const icn = data.weather[0].icon;

            cit.innerText = data.name + " Страна: " + `${data.sys.country}`;
            iconw.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            weatherElement.innerHTML = `Текущая температура: ${temperature}°C<br>Описание: ${description}`;
        })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
    }

    // Вызывать функцию getWeather при нажатии кнопки
    document.querySelector('button').addEventListener('click', getWeather);
});