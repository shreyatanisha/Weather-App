async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "ad0429d06b802b41d283e7f297b57f55"; // 🔑 Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById("result").innerHTML = `<p>❌ City not found!</p>`;
    }
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>⚠️ Error fetching data</p>`;
  }
}
