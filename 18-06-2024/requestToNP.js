let url = 'https://api.novaposhta.ua/v2.0/json/'
let apiKey = ''

let arrOfRegion = []
let arrOfCity = []

let selectRegion = document.getElementById("slcRegion")
let optionRegion = { }
createElementForNP(selectRegion, arrOfRegion, 'getAreas', optionRegion, buildOfRegion)

document.getElementById("slcRegion").onchange = () =>
{
    let selectOfCity;
    console.log(selectRegion.value)
    let optionCity = { "AreaRef": selectRegion.value }
    createElementForNP(selectOfCity, arrOfCity, 'getSettlements', optionCity, buildOfCity)
}

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
            logger.info += response;
            console.log(response)
            func(prop, arrOf)
        })
        .catch(err => { logger.error += err.message + '\n'; })
}
function buildOfRegion(slcRegion, arr)
{
    slcRegion.innerText = ''
    arr.forEach(res =>
    {
        let op = document.createElement('option')
        op.value = res.Ref
        op.dataset.AreasCenter = res.AreasCenter
        op.innerText = res.Description
        slcRegion.appendChild(op)
    })
}
function buildOfCity(slcCity, arr)
{
    slcCity.innerText = ''; slcCity.style.visibility = 'visible'
    console.log('here')
    arr.forEach(res =>
    {
        let op = document.createElement("option")
        op.value = res.Ref
        op.innerText = res.Description
        slcCity.appendChild(op)
    })
    document.getElementById("container").appendChild(slcCity)
}