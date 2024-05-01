async function getWeather() {
    const cityName = document.getElementById("city-input").value;
    const apiKey = "81d26bd36fde4958a48175558240105";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        let date = data.location.localtime.split(" ")[0];
        document.getElementById("city-name").innerText =
            data.location.name + ", " + data.location.country;
        document.getElementById("date").innerText = date;
        document.getElementById(
            "temperature"
        ).innerText = `${data.current.temp_c} °C`;
        document.getElementById("weather-description").innerText =
            data.current.condition.text;
    } catch (error) {
        console.error("Failed to fetch weather", error);
    }
}
