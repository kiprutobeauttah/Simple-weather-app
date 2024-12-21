const apiKey = 'd90f68dd41c34b5e830130245242012'; // Your API key
const apiUrl = 'https://api.weatherapi.com/v1/current.json';

async function getWeather() {
  const city = document.getElementById('city').value;
  const url = `${apiUrl}?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      document.getElementById('result').innerHTML = `<p>City not found. Please try again.</p>`;
    } else {
      const weather = data.current;
      const location = data.location;

      document.getElementById('result').innerHTML = `
        <h2>${location.name}, ${location.country}</h2>
        <div class="temperature">${weather.temp_c}°C</div>
        <div class="description">${weather.condition.text}</div>
        <img src="${weather.condition.icon}" alt="Weather icon" />
      `;
    }
  } catch (error) {
    document.getElementById('result').innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
  }
}