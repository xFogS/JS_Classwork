let url = 'https://api.novaposhta.ua/v2.0/json/'
let apiKey = ''

let arrOfRegion = []
let arrOfCity = []
let arrOfPostOffice = []

function createElementForNP(prop, arrOf, callMethod, options, func)
{
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(
            {
                "apiKey": apiKey,
                "modelName": "AddressGeneral",
                "calledMethod": callMethod,
                "methodProperties": options
            }
        )})
        .then(request => { return request.json() })
        .then(response =>
        {
            arrOf = response.data;
            logger.info += response + '\n';
            console.log(arrOf)
            return func(prop, arrOf)
        })
        .catch(err => { logger.error += err.message + '\n'; })
}
let selectRegion = document.getElementById("slcRegion")
let optionRegion = { }
createElementForNP(selectRegion, arrOfRegion, 'getAreas', optionRegion, buildOfRegion)

selectRegion.onchange = () =>
{
    let selectOfCity = document.getElementById("slcCity");
    let optionCity = { "AreaRef": selectRegion.value }
    createElementForNP(selectOfCity, arrOfCity, 'getCities', optionCity, buildOfCity)
}

let selectCity = document.getElementById("slcCity")
selectCity.onchange = () =>
{
    let selectOfPostOffice = document.getElementById("slcPost");
    let optionPostOffice = { "CityRef": selectCity.value }
    createElementForNP(selectOfPostOffice, arrOfPostOffice, 'getWarehouses', optionPostOffice, buildOfPostOffice)
}