let apiKey = "key=0fdff4eec106484ab64130539243006"
let url = "http://api.weatherapi.com/v1/current.json?"
let arrWeather = []
function buildWeather()
{
    if (apiKey === '' && url === '') return -1;

    /*
        http://api.weatherapi.com/v1/current.json?key=0fdff4eec106484ab64130539243006&q=Odesa&aqi=yes
    */
    fetch(url+apiKey+'&q=Kyiv&days=5')
        .then(request => { if (request.status === 200) return request.json()})
        .then(response =>
        {
            arrWeather = response;
            console.log(arrWeather)
            updateMainInformation()
        })
        .catch(err => console.log(err.message))

}
function updateMainInformation()
{
    if (arrWeather === null) return -1;

    let image = document.getElementById("currentWeatherIcon")
    let temperature = document.getElementById("currentTemperature")
    let condition = document.getElementById("currentWeatherCondition")
    let place = document.getElementById("currentPlace")
    let dateNow = document.getElementById("dtNow")
    let wind = document.getElementById("cWind")
    let precip = document.getElementById("cPrecip")
    let pressure = document.getElementById("cPressure")

    image.src = arrWeather.current.condition.icon
    temperature.innerText = arrWeather.current.temp_c + '℃'
    wind.innerText = "Wind " + arrWeather.current.wind_kph
    precip.innerText = "Precip " + arrWeather.current.precip_mm
    pressure.innerText = "Pressure " + arrWeather.current.pressure_mb
    condition.innerText = arrWeather.current.condition.text
    place.innerText = arrWeather.location.country + ",  " + arrWeather.location.name
    dateNow.innerText = arrWeather.location.localtime
}

buildWeather()
