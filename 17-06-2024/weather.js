let apiKey = "key=0fdff4eec106484ab64130539243006"
let url = "http://api.weatherapi.com/v1/current.json?"
let arrWeather = []
function buildWeather()
{
    if (apiKey === '' && url === '') return -1;

    /*
        http://api.weatherapi.com/v1/current.json?key=0fdff4eec106484ab64130539243006&q=Odesa&aqi=yes
    */
    fetch(url+apiKey+'&q=Odesa')
        .then(request => { if (request.status === 200) return request.json()})
        .then(response =>
        {
            arrWeather = response;
            console.log(arrWeather)
        })
        .catch(err => console.log(err.message))

}
function updateInformation()
{
    if (arrWeather === null) return -1;

    let image = document.getElementById("currentWeatherIcon")
    let temperature = document.getElementById("currentTemperature")
    let condition = document.getElementById("currentWeatherCondition")
    let place = document.getElementById("currentPlace")
    let dateNow = document.getElementById("dtNow")
    arrWeather.forEach(res =>
    {
        image.src = res.current.condition.icon
        temperature.innerText = res.current.temp_c + '&deg;'
        condition.innerText = res.current.condition.text
        place.innerText = res.location.name + ",  " + res.location.region
        dateNow.innerText = res.location.localtime
    })
}

buildWeather()
updateInformation()
